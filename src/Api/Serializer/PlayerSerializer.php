<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;

class PlayerSerializer extends AbstractSerializer
{
    protected $type = 'player';

    protected function getDefaultAttributes($player)
    {
        if (! ($player instanceof Player)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.Player::class
            );
        }

        return [
            'id'            => $player->id,
            'first_name'    => $player->first_name,
            'last_name'     => $player->last_name,
            'age'           => $player->age,
            'height'        => $player->height,
            'weight'        => $player->weight,
            'nationality'   => $player->nationality,
            'bowling_style' => $player->bowling_style,
            'running'       => $player->running,
            'defense'       => $player->defense,
            'attacking'     => $player->attacking,
            'lofted'        => $player->lofted,
            'vs_spin'       => $player->vs_spin,
            'vs_pace'       => $player->vs_pace,
            'footwork'      => $player->footwork,
            'timing'        => $player->timing,
            'control'       => $player->control,
            'pace'          => $player->pace,
            'switg'         => $player->swing,
            'slower_ball'   => $player->slower_ball,
            'seam'          => $player->seam,
            'accuracy'      => $player->accuracy,
            'discipline'    => $player->discipline,
            'bouncer'       => $player->bouncer,
            'yorker'        => $player->yorker,
            'tpe'           => $player->tpe,
            'banked_tpe'    => $player->banked_tpe,
            'createdAt'     => $this->formatDate($player->created_at),
            'updatedAt'     => $this->formatDate($player->updated_at)
        ];
    }

    protected function user($player)
    {
        return $this->hasOne($player, BasicUserSerializer::class);
    }

    protected function team($player)
    {
        return $this->hasOne($player, TeamSerializer::class);
    }

    protected function player_movements($player)
    {
        return $this->hasMany($player, PlayerMovementSerializer::class);
    }
}