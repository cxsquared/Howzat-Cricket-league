<?php

namespace Cxsquared\HowzatCricketLeague\Update;

use Carbon\Carbon;

class DateHelper
{
    public static function getNextUpdateDate()
    {
        $now = Carbon::now();

        return $now->endOfWeek(Carbon::SUNDAY);
    }
}