<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Player\PlayerMovement;
use Flarum\Api\Serializer\AbstractSerializer;
use InvalidArgumentException;

class PlayerMovementSerializer extends AbstractSerializer
{
    protected $type = 'playerMovements';

    protected function getDefaultAttributes($player_movement)
    {
        if (! ($player_movement instanceof PlayerMovement)) {
            throw new InvalidArgumentException (
                get_class($this).' can only serialize instances of '.PlayerMovement::class
            );
        }

        return [
            'id'        => $player_movement->id,
            'date'      => $this->formatDate($player_movement->date),
            'type'      => $player_movement->id,
            'createdAt' => $this->formatDate($player_movement->created_at),
            'updatedAt' => $this->formatDate($player_movement->updated_at)
        ];
    }

    protected function player($player_movement)
    { 
        return $this->hasOne($player_movement, PlayerSerializer::class);
    }

    protected function from_team($player_movement)
    { 
        return $this->hasOne($player_movement, TeamSerializer::class);
    }

    protected function to_team($player_movement)
    { 
        return $this->hasOne($player_movement, TeamSerializer::class);
    }
}