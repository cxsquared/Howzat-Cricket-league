<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;

class PlayerSerializer extends AbstractSerializer
{
    protected $type = 'players';

    protected function getDefaultAttributes($player)
    {
       if (! ($player instanceof Player)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.Player::class
            );
        }

        return [
            'firstName'         => $player->first_name,
            'lastName'          => $player->last_name,
            'age'               => $player->age,
            'height'            => $player->height,
            'weight'            => $player->weight,
            'nationality'       => $player->nationality,
            'bowlingStyle'      => $player->bowling_style,
            'running'           => $player->running,
            'defense'           => $player->defense,
            'attacking'         => $player->attacking,
            'lofted'            => $player->lofted,
            'vsSpin'            => $player->vs_spin,
            'vsPace'            => $player->vs_pace,
            'footwork'          => $player->footwork,
            'timing'            => $player->timing,
            'control'           => $player->control,
            'paceFlight'        => $player->pace_flight,
            'swingLegSpin'      => $player->swing_leg_spin,
            'slowerBallOffSpin' => $player->slower_ball_off_spin,
            'seamDrift'         => $player->seam_drift,
            'accuracy'          => $player->accuracy,
            'discipline'        => $player->discipline,
            'bouncerBounce'     => $player->bouncer_bounce,
            'yorkerArmBall'     => $player->yorker_arm_ball,
            'tpe'               => $player->tpe,
            'bankedTpe'         => $player->banked_tpe,
            'createdAt'         => $this->formatDate($player->created_at),
            'updatedAt'         => $this->formatDate($player->updated_at),
            'canEdit'           => $this->actor->can('edit', $player)
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

    protected function playerMovements($player)
    {
        return $this->hasMany($player, PlayerMovementSerializer::class, 'player_movements');
    }
}