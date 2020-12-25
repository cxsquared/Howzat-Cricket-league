<?php

namespace Cxsquared\HowzatCricketLeague\Update;

use Flarum\Foundation\ValidationException;
use Symfony\Contracts\Translation\TranslatorInterface;

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

    public static function canClaim($thisWeeksUpdates, $newUpdate, $maxCapped,
                                    TranslatorInterface $translator) {
        $isPt = TypeHelper::isPt($newUpdate->type, $newUpdate->tpe);
        $isAffiliate = TypeHelper::isAffiliate($newUpdate->type);

        $cappedTpeThisWeek = 0;
        foreach($thisWeeksUpdates as $update) {
            if ($update->is_capped) {
                $cappedTpeThisWeek += $update->tpe;
            }

            if ($isPt && TypeHelper::isPt($update->type, $update->tpe)) {
                throw new ValidationException(['update' => $translator->trans('hcl.api.claimed_pt')]);
            }

            if ($isAffiliate && TypeHelper::isAffiliate($update->type)) {
                throw new ValidationException(['update' => $translator->trans('hcl.api.claimed_affiliate')]);
            }

            if ($newUpdate->is_capped && $cappedTpeThisWeek + $newUpdate->tpe > $maxCapped) {
                throw new ValidationException(['update' => $translator->trans('hcl.api.claimed_max')]);
            }
        }
    }

    public static function isPt($type, $tpe) {
        if ($type === 'pointTask' || $type === 'welfare')
            return true;

        if (($type === 'affiliate') && $tpe >= 6)
            return true;

        return false;
    }

    public static function isAffiliate($type) {
        return $type === 'affiliate';
    }
}