<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Cxsquared\HowzatCricketLeague\Player\PlayerRole;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use LogicException;

class UpdatePlayerRolesHandler
{
    use DispatchEventsTrait;

    public function __construct(Dispatcher $events)
    {
       $this->events = $events; 
    }

    public function handle(UpdatePlayerRoles $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $team = Team::findOrFail($command->team_id);

        $isCaptain = $actor->id === $team->gm_user_id || $actor->id === $team->agm_user_id;

        if (!$isCaptain) {
            throw new PermissionDeniedException;
        }

        $roles = Arr::get($data, 'roles');

        $players = $team->players()->mapWithKeys(function ($player) {
            return [$player['id'] => $player];
        });

        $saved_roles = [];

        foreach($roles as &$role) {
            $player_id = $role['playerId'];
            if (!array_key_exists($player_id, $players)) {
                throw new LogicException("Player ".$player_id." is not on the given team");
            }

            $existing_role = $players[$player_id]->player_role();

            if ($existing_role === null) {
                $existing_role = new PlayerRole;
                $existing_role->team_id = $team->id;
                $existing_role->player_id = $team->id;
            }

            if (isset($role['role'])) {
                $existing_role->role = $role['role'];
            }

            if (isset($role['order'])) {
                $existing_role->role = $role['order'];
            }

            $existing_role->save();

            array_push($saved_roles, $existing_role);
        }

        return $saved_roles;
    }

}