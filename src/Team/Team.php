<?php

namespace Cxsquared\HowzatCricketLeague\Team;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerMovement;
use Flarum\Foundation\EventGeneratorTrait;

class Team extends AbstractModel
{
    use EventGeneratorTrait;

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    public function gm_user()
    {
        return $this->belongsTo(User::class);
    }

    public function agm_user()
    {
        return $this->belongsTo(User::class);
    }

    public function players()
    {
        return $this->hasMany(Player::class);
    }

    public function to_movements()
    {
        return $this->hasMany(PlayerMovement::class, 'to_team_id');
    }

    public function from_movements()
    {
        return $this->hasMany(PlayerMovement::class, 'from_team_id');
    }

}