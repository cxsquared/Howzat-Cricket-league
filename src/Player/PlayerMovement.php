<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Carbon\Carbon;
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

    public static function create($player_id, $type, $from_team_id, $to_team_id, $date)
    {
        $player_movement = new static;

        $player_movement->player_id = $player_id;
        $player_movement->type = $type;
        $player_movement->from_team_id = $from_team_id;
        $player_movement->to_team_id = $to_team_id;

        $player_movement->created_at = Carbon::now();

        return $player_movement;
    }
}
