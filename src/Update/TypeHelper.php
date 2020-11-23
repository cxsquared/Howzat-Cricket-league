<?php

namespace Cxsquared\HowzatCricketLeague\Update;

use Flarum\Foundation\ValidationException;

class TypeHelper
{
    public static function isCapped($type)
    {
        switch($type) {
            case 'pointTask':
            case 'minorPointTask':
            case 'pressConference':
            case 'job':
            case 'welfare':
            case 'affiliate':
                return true;
            default:
                return false;
        }
    }

    public static function canClaim($thisWeeksUpdates, $newUpdate, $maxCapped) {
        $isPt = TypeHelper::isPt($newUpdate->type, $newUpdate->tpe);
        $isAffiliate = TypeHelper::isAffiliate($newUpdate->type);

        $cappedTpeThisWeek = 0;
        foreach($thisWeeksUpdates as $update) {
            $cappedTpeThisWeek += $update->tpe;

            if ($isPt && TypeHelper::isPt($update->type, $update->tpe)) {
                // TODO: Update this to use the translator
                throw new ValidationException(['update' => "You've already claimed a Point Task this week."]);
            }

            if ($isAffiliate && TypeHelper::isAffiliate($update->type)) {
                // TODO: Update this to use the translator
                throw new ValidationException(['update' => "You've already claimed an Affiliate Task this week."]);
            }

            if ($update->is_capped && $cappedTpeThisWeek + $newUpdate->tpe > $maxCapped) {
                // TODO: Update this to use the translator
                throw new ValidationException(['update' => "You've already claimed max capped TPE this week."]);
            }
        }
    }

    public static function isPt($type, $tpe) {
        if ($type == 'pointTask' || $type == 'welfare')
            return true;

        if (($type == 'affiliate') && $tpe >= 6)
            return true;
    }

    public static function isAffiliate($type) {
        return $type == 'affiliate';
    }
}