<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\Notification\UpdateApprovedBlueprint;
use Cxsquared\HowzatCricketLeague\Notification\UpdateDeniedBlueprint;
use Cxsquared\HowzatCricketLeague\Update\Event\Approved;
use Cxsquared\HowzatCricketLeague\Update\Event\Denied;
use Flarum\Notification\NotificationSyncer;
use Illuminate\Contracts\Events\Dispatcher;

class SendUpdateNotifications
{
    protected $notifications;

    public function __construct(NotificationSyncer $notifications)
    {
       $this->notifications = $notifications; 
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Approved::class, [$this, 'whenUpdateApproved']);
        $events->listen(Denied::class, [$this, 'whenUpdateDenied']);
    }

    public function whenUpdateApproved(Approved $event)
    {
        $update = $event->update;
        $user = $event->actor;
        $recipients = [$update->submitted_user];

        if ($update->submitted_user->id != $user->id) {
            $this->notifications->sync(
                new UpdateApprovedBlueprint($update, $user),
                $recipients
            );
        }
    }

    public function whenUpdateDenied(Denied $event)
    {
        $update = $event->update;
        $user = $event->actor;
        $recipients = [$event->update->submitted_user];

        if ($update->submitted_user->id != $user->id) {
            $this->notifications->sync(
                new UpdateDeniedBlueprint($update, $user, $event->update),
                $recipients
            );
        }
    }

}