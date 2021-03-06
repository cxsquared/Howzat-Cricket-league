<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\Api\Serializer\PlayerSerializer;
use Cxsquared\HowzatCricketLeague\Api\Serializer\TeamSerializer;
use Cxsquared\HowzatCricketLeague\Api\Serializer\UpdateSerializer;
use Flarum\Api\Controller\ListUsersController;
use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;

class AddRelationships
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'prepareApiData']);
        $events->listen(WillGetData::class, [$this, 'willGetData']);
    }

    public function prepareApiAttributes(Serializing $event)
    {
    }

    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(BasicUserSerializer::class, 'player')) {
            return $event->serializer->hasOne($event->model, PlayerSerializer::class, 'player');
        }

        if ($event->isRelationship(BasicUserSerializer::class, 'retired_players')) {
            return $event->serializer->hasMany($event->model, PlayerSerializer::class, 'retired_players');
        }

        if ($event->isRelationship(BasicUserSerializer::class, 'gm_team')) {
            return $event->serializer->hasOne($event->model, TeamSerializer::class, 'gm_team');
        }

        if ($event->isRelationship(BasicUserSerializer::class, 'agm_team')) {
            return $event->serializer->hasOne($event->model, TeamSerializer::class, 'agm_team');
        }

        if ($event->isRelationship(BasicUserSerializer::class, 'submitted_updates')) {
            return $event->serializer->hasMany($event->model, UpdateSerializer::class, 'submitted_updates');
        }
    }

    public function prepareApiData(WillSerializeData $event)
    {
        if ($event->isController(ShowUserController::class)) {
            $event->data->load('player');
            $event->data->load('retired_players');
            $event->data->load('gm_team');
            $event->data->load('agm_team');
            $event->data->load('submitted_updates');
        }

        if ($event->isController(ListUsersController::class)) {
            $event->data->load('player');
            $event->data->load('gm_team');
            $event->data->load('agm_team');
            $event->data->load('submitted_updates');
            $event->data->load('retired_players');
        }
    }

    public function willGetData(WillGetData $event)
    {
        if ($event->isController(ShowUserController::class)) {
            $event->addInclude('player');
            $event->addInclude('retired_players');
            $event->addInclude('gm_team');
            $event->addInclude('agm_team');
            $event->addInclude('submitted_updates');
        }

        if ($event->isController(ListUsersController::class)) {
            $event->addInclude('player');
            $event->addInclude('gm_team');
            $event->addInclude('agm_team');
            $event->addInclude('submitted_updates');
            $event->addInclude('retired_players');
        }
    }
}
