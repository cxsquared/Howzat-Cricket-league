<?php

namespace Cxsquared\HowzatCricketLeague;

use Flarum\Settings\SettingsRepositoryInterface;

class SettingsUtils
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

    public static function GetLeagueMovementsTagId(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.league-movements-tag-id', 41);
    }

    public static function GetRetiredMentTagId(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.retirement-tag-id', 52);
    }

    public static function GetSeason(SettingsRepositoryInterface $settings)
    {
        return $settings->get('hcl.season', 2);
    }
}
