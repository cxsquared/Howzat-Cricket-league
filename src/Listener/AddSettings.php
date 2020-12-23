<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddSettings
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'attachSettings']);
    }

    public function attachSettings(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['canEditUpdates'] = $event->actor->hasPermissionLike('update.edit');
            $event->attributes['hcl.maxWeeklyCapped'] = (int) $this->settings->get('hcl.max-weekly-capped', 9);
            $event->attributes['hcl.botId'] = (int) $this->settings->get('hcl.bot-id', 18);
            $event->attributes['hcl.playerTagId'] = (int) $this->settings->get('hcl.player-tag-id', 14);
            $event->attributes['hcl.captainGroupId'] = (int) $this->settings->get('hcl.captain-group-id', 13);
            $event->attributes['hcl.viceCaptainGroupId'] = (int) $this->settings->get('hcl.vice-captain-group-id', 13);
        }
    }
}