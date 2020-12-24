<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\HclSettingsUtils;
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
            $event->attributes['hcl.maxWeeklyCapped'] = (int) HclSettingsUtils::GetMaxWeeklyCapped($this->settings);
            $event->attributes['hcl.botId'] = (int) HclSettingsUtils::GetBotUserId($this->settings);
            $event->attributes['hcl.playerTagId'] = (int) HclSettingsUtils::GetPlayerTagId($this->settings);
            $event->attributes['hcl.captainGroupId'] = (int) HclSettingsUtils::GetCaptainGroupId($this->settings);
            $event->attributes['hcl.viceCaptainGroupId'] = (int) HclSettingsUtils::GetViceCaptainGroupId($this->settings);
        }
    }
}