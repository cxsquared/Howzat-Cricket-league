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

        $players = Player::all()->toArray();

        # add headers for each column in the CSV download
        array_unshift($players, array_keys($players[0]));

        $FH = fopen('php://temp', 'rw');
        foreach($players as $row) {
            fputcsv($FH, $row);
        }
        rewind($FH);
        $csv = stream_get_contents($FH);
        fclose($FH);

        return new TextResponse($csv, 200, $headers);
    }
}