<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\ValidationException;
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

        $wk = false;
        $bowl_1 = false;
        $bowl_2 = false;

        $errors = [];

        foreach ($players as $player) {
            $role = Arr::get($player, 'role');

            if ($role === 'wk') {
                if ($wk) {
                    $errors[] = "You must have 1 wicket keeper";
                }

                $wk = true;
            }

            if ($role === "bowler_1") {
                if ($bowl_1) {
                    $errors[] = "You must have 1 1st Opening Bowler";
                }

                $bowl_1 = true;
            }

            if ($role === "bowler_2") {
                if ($bowl_2) {
                    $errors[] = "You must have 1 2nd Opening Bowler";
                }

                $bowl_2 = true;
            }
        }

        if (!$wk) {
            $errors[] = "You must have 1 Wicket Keeper";
        }

        if (!$bowl_1) {
            $errors[] = "You must have 1 1st Opening Bowler";
        }

        if (!$bowl_2) {
            $errors[] = "You must have 1 2nd Opening Bowler";
        }

        if (!empty($errors)) {
            throw new ValidationException($errors);
        }

        foreach ($players as $player) {
            $playerId = Arr::get($player, 'id');
            $role = Arr::get($player, 'role');
            $order = Arr::get($player, 'order');

            Player::where('team_id', $teamId)
                ->where('id', $playerId)
                ->update([
                    'order' => $order,
                    'role' => $role
                ]);
        }

        return new EmptyResponse(204);
    }
}
