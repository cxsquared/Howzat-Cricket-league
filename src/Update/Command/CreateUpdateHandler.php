<?php

namespace Cxsquared\HowzatCricketLeague\Update\Command;

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

        $actor->assertRegistered();

        $update = Update::createUpdate(
            Arr::get($data, 'attributes.date'),
            $actor->id,
            Arr::get($data, 'attributes.link'),
            Arr::get($data, 'attributes.type'),
            Arr::get($data, 'attributes.comment'),
            Arr::get($data, 'attributes.tpe')
        );

        $this->events->dispatch(
            new Saving($update, $actor, $data)
        );

        $update->save();

        $this->dispatchEventsFor($update, $actor);

        return $update;
    }
}