<?php

namespace Cxsquared\HowzatCricketLeague\Update\Command;

use Cxsquared\HowzatCricketLeague\Player\PlayerRepository;
use Cxsquared\HowzatCricketLeague\Update\Event\Approved;
use Cxsquared\HowzatCricketLeague\Update\Event\Denied;
use Cxsquared\HowzatCricketLeague\Update\Event\Saving;
use Cxsquared\HowzatCricketLeague\Update\Event\UnderReview;
use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use LogicException;

class UpdateUpdateHandler
{
    use DispatchEventsTrait;

    protected $players;

    public function __construct(Dispatcher $events, PlayerRepository $players)
    {
       $this->events = $events; 
       $this->players = $players;
    }

    public function handle(UpdateUpdate $command)
    {
        $actor = $command->actor;
        $data = $command->data;
        $update = Update::findOrFail($command->updateId);
        $player = $this->players->findOrFailByUserId($update->submitted_user->id);

        $actor->assertCan('update', $update);

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['status'])) {
            $status = $attributes['status'];
            $previousStatus = $update->status;

            if ($status == $previousStatus) {
                if ($status == 'approved') {
                    throw new LogicException('This update has already been approved');
                } else if ($status == 'denied') {
                    throw new LogicException('This update has already been denied');
                }
            }

            switch($status) {
                case 'approved':
                    $update = $update->approve($actor->id);
                    $this->apply_player_tpe($player, $update, $previousStatus);
                    $this->events->dispatch(
                        new Approved($update, $actor, $data)
                    );
                    break;
                case 'denied':
                    $update = $update->deny($actor->id);
                    $this->apply_player_tpe($player, $update, $previousStatus);
                    $this->events->dispatch(
                        new Denied($update, $actor, $data)
                    );
                    break;
                case 'under_review':
                    $update = $update->under_review($actor->id);
                    $this->events->dispatch(
                        new UnderReview($update, $actor, $data)
                    );
                    break;
            }
        } else if($update->status == 'pending') {
            $update = $update->under_review($actor->id);
        }

        if(isset($attributes['updaterComment'])) {
            $update->updater_comment = $attributes['updaterComment'];
        }
        if(isset($attributes['date'])) {
            $update->date = $attributes['date'];
        }
        if(isset($attributes['link'])) {
            $update->date = $attributes['link'];
        }
        if(isset($attributes['type'])) {
            $update->date = $attributes['type'];
        }
        if(isset($attributes['comment'])) {
            $update->date = $attributes['comment'];
        }
        if(isset($attributes['tpe'])) {
            $update->date = $attributes['tpe'];
        }

        $this->events->dispatch(
            new Saving($update, $actor, $data)
        );

        $update->save();
        $player->save();

        $this->dispatchEventsFor($update, $actor);

        return $update;
    }

    protected function apply_player_tpe($player, $update, $previousStatus)
    {
        if ($previousStatus == 'pending' && $update->status == 'approved') {
            $player->banked_tpe += $update->tpe;
        } else if ($previousStatus == 'approved' && $update->status != 'approved') {
            $player->banked_tpe -= $update->tpe;
        }
    }
}