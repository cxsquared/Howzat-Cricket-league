<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class UpdateTeamRoleController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        $players = Arr::get($request->getParsedBody(), 'players');
        $teamId = Arr::get($request->getQueryParams(), 'id');

        if ($players === null) {
            return new EmptyResponse(422);
        }

        $team = Team::findOrFail($teamId);

        if ($actor->id !== $team->gm_user_id || $actor->id !== $team->agm_user_id) {
            $actor->assertAdmin();
        }

        foreach ($players as $i => $player) {
            $playerId = Arr::get($player, 'id');
            $role = Arr::get($player, 'role');

            Player::where('team_id', $teamId)
                ->where('id', $playerId)
                ->update([
                    'order' => $i,
                    'role' => $role
                ]);
        }

        return new EmptyResponse(204);
    }
}
