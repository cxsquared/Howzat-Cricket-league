<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;

class TeamSerializer extends AbstractSerializer
{
    protected $type = "teams";

    protected function getDefaultAttributes($team)
    {
        if (! ($team instanceof Team)) {
            throw new InvalidArgumentException (
                get_class($this).' can only serialize instances of '.Team::class
            );
        }

        return [
            'id'            => $team->id,
            'name'          => $team->name,
            'logoLink'     => $team->logo_link,
            'createdAt'     => $this->formatDate($team->created_at),
            'updatedAt'     => $this->formatDate($team->updated_at)
        ];
    }

    protected function gmUser($team)
    {
        return $this->hasOne($team, BasicUserSerializer::class);
    }

    protected function agmUser($team)
    {
        return $this->hasOne($team, BasicUserSerializer::class);
    }

    protected function players($team)
    {
        return $this->hasMany($team, PlayerSerializer::class);
    }

    protected function toMovements($team)
    {
        return $this->hasMany($team, PlayerMovementSerializer::class);
    }

    protected function fromMovements($team)
    {
        return $this->hasMany($team, PlayerMovementSerializer::class);
    }
}