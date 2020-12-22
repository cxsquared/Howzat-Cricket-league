<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Event\Created;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\Player\Event\Saving;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreatePlayerHandler
{
    use DispatchEventsTrait;

    protected $validator;

    public function __construct(Dispatcher $events, PlayerValidator $validator)
    {
        $this->events = $events;
        $this->validator = $validator;
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
            Arr::get($data, 'attributes.bowlingStyle')
        );

        // Starting Banked TPE is 30
        $player = $player->updateTpe(0, 30);

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

        return $player;
    }
}