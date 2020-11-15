<?php

namespace Cxsquared\HowzatCricketLeague\Update\Command;

use Cxsquared\HowzatCricketLeague\Update\Event\Approved;
use Cxsquared\HowzatCricketLeague\Update\Event\Denied;
use Cxsquared\HowzatCricketLeague\Update\Event\Saving;
use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreateUpdateHandler
{
    use DispatchEventsTrait;

    public function __construct(Dispatcher $events)
    {
       $this->events = $events; 
    }

    public function handle(CreateUpdate $command)
    {
        $actor = $command->actor;
        $data = $command->data;
        $update = Update::findOrFail($command->updateId);

        $actor->assertCan('update', $update);

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['status'])) {
            $status = $attributes['status'];
            switch($status) {
                case 'approved':
                    $update = $update->approve($actor->id);
                    $this->events->dispatch(
                        new Approved($update, $actor, $data)
                    );
                    break;
                case 'denined':
                    $update = $update->deny($actor->id);
                    $this->events->dispatch(
                        new Denied($update, $actor, $data)
                    );
                break;
            }
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

        $this->dispatchEventsFor($update, $actor);

        return $update;
    }
}