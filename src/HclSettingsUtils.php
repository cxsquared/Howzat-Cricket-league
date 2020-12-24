<?php

namespace Cxsquared\HowzatCricketLeague;

use Flarum\Settings\SettingsRepositoryInterface;

class HclSettingsUtils 
{
    public static function GetCaptainGroupId(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.captain-group-id', 13);
    }

    public static function GetViceCaptainGroupId(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.vice-captain-group-id', 18);
    }

    public static function GetBotUserId(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.bot-id', 18);
    }

    public static function GetPlayerTagId(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.player-tag-id', 14);
    }

    public static function GetMaxWeeklyCapped(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.max-weekly-capped', 9);
    }
}