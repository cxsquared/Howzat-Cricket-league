<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Event\Created;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\Player\Event\Saving;
use Cxsquared\HowzatCricketLeague\SettingsUtils;
use Cxsquared\HowzatCricketLeague\Update\DateHelper;
use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreatePlayerHandler
{
    use DispatchEventsTrait;

    protected $validator;

    protected $settings;

    public function __construct(
        Dispatcher $events,
        PlayerValidator $validator,
        SettingsRepositoryInterface $settings
    ) {
        $this->events = $events;
        $this->validator = $validator;
        $this->settings = $settings;
    }

    public function handle(CreatePlayer $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertRegistered();

        $player = Player::createBase(
            $actor->id,
            Arr::get($data, 'attributes.firstName'),
            Arr::get($data, 'attributes.lastName'),
            Arr::get($data, 'attributes.age'),
            Arr::get($data, 'attributes.height'),
            Arr::get($data, 'attributes.weight'),
            Arr::get($data, 'attributes.nationality'),
            Arr::get($data, 'attributes.bowlingStyle'),
            SettingsUtils::GetSeason($this->settings)
        );

        // Starting Banked TPE is 30
        $player = $player->updateTpe(30, 30);

        // Default TPE is 40.
        // Not sure why we can't just use the defaults from the DB schema
        $player = $player->updateBattingSkills(40, 40, 40, 40, 40, 40, 40, 40, 40);
        $player = $player->updateBowlingSkills(40, 40, 40, 40, 40, 40, 40, 40);

        $player->created_at = Carbon::now();
        $player->updated_at = Carbon::now();

        $this->events->dispatch(
            new Saving($player, $actor, $data)
        );

        $this->validator->setFirstName($player->first_name);
        $this->validator->setLastName($player->last_name);
        $this->validator->assertValid($player->getAttributes());

        $player->save();

        $this->events->dispatch(
            new Created($player, $actor)
        );

        $this->dispatchEventsFor($player, $actor);

        $update = Update::createUpdate(DateHelper::getNextUpdateDate(), $actor->id, "", 'baseTpe', "", 30, false);
        $update->approve($this->settings->get('hcl.bot-id', 18));

        $update->save();

        return $player;
    }
}
