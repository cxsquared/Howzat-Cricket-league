<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Laminas\Diactoros\Response\TextResponse;
use Psr\Http\Message\ResponseInterface as ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

// https://stackoverflow.com/questions/26146719/use-laravel-to-download-table-as-csv/27596496#27596496
class DownloadPlayersController implements RequestHandlerInterface 
{
    public function handle(Request $request) : ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $actor->assertAdmin();

        $headers = [
            'Cache-Control'         => 'must-revalidate, post-check=0, pre-check=0',
            'Content-type'          => 'text/csv',
            'Content-Disposition'   => 'attachment; filename=players.csv',
            'Expires'               => '0',
            'Pragma'                => 'public'
        ];

        $csv_headers = [
            'Player Name', 'Team',
            'Running', 'Defence', 'Attacking', 'Lofted', 'Vs Spin', 'Vs Pace', 'Footwork', 'Timing', 'Control',
            'Dedicated Bowler',
            'Pace / Flight', 'Swing / Leg Spin', 'Discipline', 'Seam / Drift', 'Accuracy', 'Slower Ball / Off Spin', 'Bouncer / Bounce', 'Yorker / Arm Ball',
            'Stamina', 'Pace or Spin'
        ];

        $players = Player::all();

        $FH = fopen('php://temp', 'rw');
        fputcsv($FH, $csv_headers);
        foreach($players as $row) {
            $this->write_player($FH, $row);
        }
        rewind($FH);
        $csv = stream_get_contents($FH);
        fclose($FH);

        return new TextResponse($csv, 200, $headers);
    }

    private function write_player($fh, $player)
    {
        $style = $player->bowling_style === 'pace' ? 'p' : 's';

        $player_row = [
            "$player->first_name $player->last_name", $player->team->name,
            $player->running, $player->defense, $player->attacking, $player->lofted, $player->vs_spin, $player->vs_pace, $player->footwork, $player->timing, $player->control,
            0,
            $player->pace_flight, $player->swing_leg_spin, $player->discipline, $player->seam_drift, $player->accuracy, $player->slower_ball_off_spin, $player->bouncer_bounce, $player->yorker_arm_ball,
            70, $style
        ];

        fputcsv($fh, $player_row);
    }
}