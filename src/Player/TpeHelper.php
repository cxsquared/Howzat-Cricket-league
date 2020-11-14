<?php

namespace Cxsquared\HowzatCricketLeague\Player;

class TpeHelp
{
    public static function calcuateTpa($player)
    {
        $totalTpe = 0;

        // Batting
        $totalTpe += TpeHelp::getSingleTpaCost($player->running);
        $totalTpe += TpeHelp::getSingleTpaCost($player->defense);
        $totalTpe += TpeHelp::getSingleTpaCost($player->attacking);
        $totalTpe += TpeHelp::getSingleTpaCost($player->lofted);
        $totalTpe += TpeHelp::getSingleTpaCost($player->vs_spin);
        $totalTpe += TpeHelp::getSingleTpaCost($player->vs_pace);
        $totalTpe += TpeHelp::getSingleTpaCost($player->footwork);
        $totalTpe += TpeHelp::getSingleTpaCost($player->timing);
        $totalTpe += TpeHelp::getSingleTpaCost($player->control);

        // Bowling
        $totalTpe += TpeHelp::getSingleTpaCost($player->pace);
        $totalTpe += TpeHelp::getSingleTpaCost($player->swing);
        $totalTpe += TpeHelp::getSingleTpaCost($player->slower_ball);
        $totalTpe += TpeHelp::getSingleTpaCost($player->seam);
        $totalTpe += TpeHelp::getSingleTpaCost($player->accuracy);
        $totalTpe += TpeHelp::getSingleTpaCost($player->discipline);
        $totalTpe += TpeHelp::getSingleTpaCost($player->bouncer);
        $totalTpe += TpeHelp::getSingleTpaCost($player->yorker);

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