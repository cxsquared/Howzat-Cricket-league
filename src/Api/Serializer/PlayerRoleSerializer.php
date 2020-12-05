<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Player\PlayerRole;
use Flarum\Api\Serializer\AbstractSerializer;
use InvalidArgumentException;

class PlayerRoleSerializer extends AbstractSerializer
{
    protected $type = 'playerRoles';

    protected function getDefaultAttributes($player_role)
    {
        if (! ($player_role instanceof PlayerRole)) {
            throw new InvalidArgumentException (
                get_class($this).' can only serialize instances of '.PlayerRole::class
            );
        }

        return [
            'id'        => $player_role->id,
            'role'      => $player_role->role,
            'order'      => $player_role->order,
            'createdAt' => $this->formatDate($player_role->created_at),
            'updatedAt' => $this->formatDate($player_role->updated_at)
        ];
    }

    protected function player($player_role)
    { 
        return $this->hasOne($player_role, PlayerSerializer::class);
    }

    protected function team($player_role)
    { 
        return $this->hasOne($player_role, TeamSerializer::class);
    }
}