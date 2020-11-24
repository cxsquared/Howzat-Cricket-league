<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Flarum\User\User;

class PlayerRepository
{
    public function query()
    {
        return Player::query();
    }

    public function findOrFail($id)
    {
        $query = Player::where('id', $id);

        return $query->firstOrFail();
    }
}