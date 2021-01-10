<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\SettingsUtils;
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
            $event->attributes['hcl.maxWeeklyCapped'] = (int) SettingsUtils::GetMaxWeeklyCapped($this->settings);
            $event->attributes['hcl.botId'] = (int) SettingsUtils::GetBotUserId($this->settings);
            $event->attributes['hcl.playerTagId'] = (int) SettingsUtils::GetPlayerTagId($this->settings);
            $event->attributes['hcl.captainGroupId'] = (int) SettingsUtils::GetCaptainGroupId($this->settings);
            $event->attributes['hcl.leagueMovementTagId'] = (int) SettingsUtils::GetLeagueMovementsTagId($this->settings);
            $event->attributes['hcl.retirementTagId'] = (int) SettingsUtils::GetRetiredMentTagId($this->settings);
        }
    }
}
