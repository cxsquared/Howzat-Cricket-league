<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Flarum\Database\AbstractModel;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\EventGeneratorTrait;

class PlayerMovement extends AbstractModel
{
    use EventGeneratorTrait;

    protected $dates = [
        'date',
        'created_at',
        'updated_at'
    ];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }

    public function from_team()
    {
        return $this->belongsTo(Team::class);
    }

    public function to_team()
    {
        return $this->belongsTo(Team::class);
    }
}