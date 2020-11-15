<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\CurrentUserSerializer;

class AddApiAttributes
{
    public function handle(Serializing $event)
    {
        if ($event->isSerializer(CurrentUserSerializer::class)) {
            $event->attributes['hclCanUpdate'] = $event->actor->can('hclUpdate', $event->model);
        }
    }
}