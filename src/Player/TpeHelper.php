<?php

namespace Cxsquared\HowzatCricketLeague\Player;

class TpeHelper
{
    public static function calcuateTpa($player)
    {
        $totalTpe = 0;

        // Batting
        $totalTpe += TpeHelper::getSingleTpaCost($player->running);
        $totalTpe += TpeHelper::getSingleTpaCost($player->defense);
        $totalTpe += TpeHelper::getSingleTpaCost($player->attacking);
        $totalTpe += TpeHelper::getSingleTpaCost($player->lofted);
        $totalTpe += TpeHelper::getSingleTpaCost($player->vs_spin);
        $totalTpe += TpeHelper::getSingleTpaCost($player->vs_pace);
        $totalTpe += TpeHelper::getSingleTpaCost($player->footwork);
        $totalTpe += TpeHelper::getSingleTpaCost($player->timing);
        $totalTpe += TpeHelper::getSingleTpaCost($player->control);

        // Bowling
        $totalTpe += TpeHelper::getSingleTpaCost($player->pace_flight);
        $totalTpe += TpeHelper::getSingleTpaCost($player->swing_leg_spin);
        $totalTpe += TpeHelper::getSingleTpaCost($player->slower_ball_off_spin);
        $totalTpe += TpeHelper::getSingleTpaCost($player->seam_drift);
        $totalTpe += TpeHelper::getSingleTpaCost($player->accuracy);
        $totalTpe += TpeHelper::getSingleTpaCost($player->discipline);
        $totalTpe += TpeHelper::getSingleTpaCost($player->bouncer_bounce);
        $totalTpe += TpeHelper::getSingleTpaCost($player->yorker_arm_ball);

        return $totalTpe;
    }

    public static function getSingleTpaCost($tpe)
    {
        // Base TPE for all stats is 40 so anything before then is 0
        $tpe = $tpe - 40;
        $total = 0;

        // 0 to 40 is 0 TPE
        // 40 to 70 is 1 TPE
        // 70 to 75 is 2 TPE
        // 75 to 80 is 3 TPE
        // 80 to 90 is 5 TPE
        // 90 to 99 is 10 TPE
        while ($tpe > 0) {
            if ($tpe > 50) {
                $total += 10;
            } else if ($tpe > 40) {
                $total += 5;
            } else if ($tpe > 35) {
                $total += 3;
            } else if ($tpe > 30) {
                $total += 2;
            } else {
                $total += 1;
            }

            $tpe--;
        }

        return $total;
    }

}