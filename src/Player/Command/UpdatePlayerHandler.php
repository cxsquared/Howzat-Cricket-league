<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Cxsquared\HowzatCricketLeague\Player\Event\Saving;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerRepository;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\Player\TpeHelp;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Foundation\ValidationException;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class UpdatePlayer 
{
    use DispatchEventsTrait;

    protected $players;

    protected $validator;

    public function __construct(Dispatcher $events, PlayerRepository $players, PlayerValidator $validator)
    {
        $this->events = $events;
        $this->players = $players;
        $this->validator = $validator;
    }

    public function handle(UpdatePlayer $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $player = Player::findOrFail($command->playerId);
        $canEdit = $actor->can('hclEditPlayers', $player);
        $isActorsPlayer = $actor->id === $player->user->id;

        $attributes = Arr::get($data, 'attributes', []);

        if (!$isActorsPlayer) {
            $actor->assertPermission($canEdit);
        }

        $originalTpa = TpeHelp::calcuateTpa($player);

        $player = $this->updateBattingSkills($player, $attributes);
        $player = $this->updateBowlingSkills($player, $attributes);

        $newTpa = TpeHelp::calcuateTpa($player);

        $tpaThisUpdate = $newTpa - $originalTpa;

        if ($tpaThisUpdate > $player->banked_tpe) {
            // TODO: Update this to use the translator
            throw new ValidationException(['player' => "Player does not have enough banked TPE for this update."]);
        }

        $player->tpe = $player->tpe + $tpaThisUpdate ;
        $player->banked_tpe = $player->banked_tpe - $tpaThisUpdate;

        $this->event->dispatch(
            new Saving($player, $actor, $data)
        );

        $this->validator->assertValid($player->getDirty());

        $player->save();

        $this->dispatchEventsFor($player, $actor);

        return $player;
    }

    private function updateBattingSkills(Player $player, array $attributes)
    {
        if (isset($attributes['running'])) {
            $player->running = $attributes['running'];
        }
        if (isset($attributes['defense'])) {
            $player->defense = $attributes['defense'];
        }
        if (isset($attributes['attacking'])) {
            $player->attacking = $attributes['attacking'];
        }
        if (isset($attributes['lofted'])) {
            $player->lofted = $attributes['lofted'];
        }
        if (isset($attributes['vsSpin'])) {
            $player->vs_spin = $attributes['vsSpin'];
        }
        if (isset($attributes['vsPace'])) {
            $player->vs_pace = $attributes['vsPace'];
        }
        if (isset($attributes['footwork'])) {
            $player->footwork = $attributes['footwork'];
        }
        if (isset($attributes['timing'])) {
            $player->timing = $attributes['timing'];
        }
        if (isset($attributes['control'])) {
            $player->control = $attributes['control'];
        }

        return $player;
    }

    private function updateBowlingSkills(Player $player, array $attributes)
    {
        if (isset($attributes['pace'])) {
            $player->pace = $attributes['pace'];
        }
        if (isset($attributes['swing'])) {
            $player->swing = $attributes['swing'];
        }
        if (isset($attributes['slowerBall'])) {
            $player->slower_ball = $attributes['slowerBall'];
        }
        if (isset($attributes['seam'])) {
            $player->seam = $attributes['seam'];
        }
        if (isset($attributes['accuracy'])) {
            $player->accuracy = $attributes['accuracy'];
        }
        if (isset($attributes['discipline'])) {
            $player->discipline = $attributes['discipline'];
        }
        if (isset($attributes['bouncer'])) {
            $player->bouncer = $attributes['bouncer'];
        }
        if (isset($attributes['yorker'])) {
            $player->yorker = $attributes['yorker'];
        }

        return $player;
    }
}