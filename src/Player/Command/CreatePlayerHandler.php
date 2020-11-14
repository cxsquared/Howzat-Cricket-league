<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\Player\Event\Saving;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreatePlayer
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

        $player = Player::createBase(
            $actor->id,
            Arr::get($data, 'attributes.firstName'),
            Arr::get($data, 'attributes.lastName'),
            Arr::get($data, 'attributes.age'),
            Arr::get($data, 'attributes.weight'),
            Arr::get($data, 'attributes.height'),
            Arr::get($data, 'attributes.nationality'),
            Arr::get($data, 'attributes.bowlingStyle')
        );

        $player->created_at = Carbon::now();
        $player->updated_at = Carbon::now();

        $this->event->dispatch(
            new Saving($player, $actor, $data)
        );

        $this->validator->assertValid($player->getAttributes());

        $player->save();

        $this->dispatchEventsFor($player, $actor);

        return $player;
    }
}