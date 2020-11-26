<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\Notification\UpdateApprovedBlueprint;
use Cxsquared\HowzatCricketLeague\Update\Event\Approved;
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
    }

    public function whenUpdateApproved(Approved $event)
    {
        $player = $event->update->submitted_user->player;
        $user = $event->actor;
        $recipients = [$event->update->submitted_user];

        if ($player->user->id != $user->id) {
            $this->notifications->sync(
                new UpdateApprovedBlueprint($player, $user),
                $recipients
            );
        }
    }
}