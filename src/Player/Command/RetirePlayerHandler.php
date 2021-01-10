<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Event\Retire;
use Cxsquared\HowzatCricketLeague\Player\Event\Saving;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerMovement;
use Cxsquared\HowzatCricketLeague\Player\PlayerRepository;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\Player\TpeHelper;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use PlayerMovementUtils;

class RetirePlayerHandler
{
    use DispatchEventsTrait;

    protected $players;

    protected $translator;

    public function __construct(Dispatcher $events, PlayerRepository $players)
    {
        $this->events = $events;
        $this->players = $players;
        $this->translator = app(Translator::class);
    }

    public function handle(UpdatePlayer $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $player = Player::findOrFail($command->playerId);
        $canEdit = $actor->can('edit', $player);
        $isActorsPlayer = $actor->id === $player->user_id;

        if (!$isActorsPlayer) {
            $actor->assertPermission($canEdit);
        }

        $player->retire(Carbon::now());
        $player_movement = PlayerMovement::create($player->id, PlayerMovementUtils::retirement(), $player->team_id, NULL, Carbon::now());

        $this->events->dispatch(
            new Retire($player, $actor, $data)
        );

        $player->save();
        $player_movement->save();

        $this->dispatchEventsFor($player, $actor);

        return $player;
    }
}
