<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\Api\Serializer\UpdateSerializer;
use Cxsquared\HowzatCricketLeague\Notification\UpdateApprovedBlueprint;
use Cxsquared\HowzatCricketLeague\Notification\UpdateDeniedBlueprint;
use Flarum\Event\ConfigureNotificationTypes;
use Illuminate\Contracts\Events\Dispatcher;

class AddNotifications
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureNotificationTypes::class, [$this, 'addNotificationTypes']);
    }

    public function addNotificationTypes(ConfigureNotificationTypes $event) 
    {
        $event->add(UpdateApprovedBlueprint::class, UpdateSerializer::class, ['alert']);
        $event->add(UpdateDeniedBlueprint::class, UpdateSerializer::class, ['alert']);
    }

}