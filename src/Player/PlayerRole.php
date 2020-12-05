<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Flarum\Database\AbstractModel;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\EventGeneratorTrait;

class PlayerRole extends AbstractModel
{
    use EventGeneratorTrait;

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}