<?php

namespace Cxsquared\HowzatCricketLeague\Player;

class PlayerRepository
{
    public function query()
    {
        return Player::query();
    }

    public function findOrFail($id)
    {
        $query = $this->query()->where('id', $id);

        return $query->firstOrFail();
    }

    public function findOrFailByUserId($id)
    {
        $query = $this->query()->where('user_id', $id);

        return $query->firstOrFail();
    }
}
