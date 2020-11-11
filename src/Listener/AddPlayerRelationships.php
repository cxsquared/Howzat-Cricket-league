<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;

class AddPlayerRelationships 
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'getApiRelationship']);
        $events->listen(Serializing::class, [$this, 'prepareApiData']);
    }

    public function getApiRelationship(GetApiRelationship $event)
    {
    }

    public function prepareApiData(WillSerializeData $event)
    {

    }
}