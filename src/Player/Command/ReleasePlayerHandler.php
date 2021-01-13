<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Event\Released;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerMovement;
use Cxsquared\HowzatCricketLeague\Player\PlayerRepository;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\SettingsUtils;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class ReleasePlayerHandler
{
    use DispatchEventsTrait;

    protected $players;

    protected $validator;

    protected $translator;

    protected $settings;

    public function __construct(
        Dispatcher $events,
        PlayerRepository $players,
        PlayerValidator $validator,
        SettingsRepositoryInterface $settings
    ) {
        $this->events = $events;
        $this->players = $players;
        $this->validator = $validator;
        $this->settings = $settings;
        $this->translator = app(Translator::class);
    }

    public function handle(ReleasePlayer $command)
    {
        $actor = $command->actor;

        $player = Player::findOrFail($command->playerId);
        $team = Team::findOrFail($player->team_id);

        if ($actor->id !== $team->gm_user_id && $actor->id !== $team->agm_user_id) {
            $actor->assertAdmin();
        }

        $player->team_id = null;

        $player_movement = PlayerMovement::released(
            $player->id,
            $team->id,
            Carbon::now(),
            SettingsUtils::GetSeason($this->settings)
        );

        $this->events->dispatch(
            new Released($player, $team, $actor)
        );

        $player->save();
        $player_movement->save();

        $this->dispatchEventsFor($player, $actor);

        return $player;
    }
}
