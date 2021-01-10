<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;
use Flarum\Foundation\EventGeneratorTrait;
use Flarum\User\User;
use Cxsquared\HowzatCricketLeague\Team\Team;

class Player extends AbstractModel
{
    use EventGeneratorTrait;

    protected $dates = [
        'created_at',
        'updated_at',
        'retired_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function retired_user()
    {
        return $this->belongsTo(User::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function player_movements()
    {
        return $this->hasMany(PlayerMovement::class);
    }

    public function updateUpdatedAt()
    {
        $this->updated_at = Carbon::now();

        return $this;
    }

    public static function createBase(
        $user_id,
        $first_name,
        $last_name,
        $age,
        $height,
        $weight,
        $nationality,
        $bowling_style
    ) {
        $player = new static;

        $player->user_id = $user_id;
        $player->first_name = $first_name;
        $player->last_name = $last_name;
        $player->age = $age;
        $player->height = $height;
        $player->weight = $weight;
        $player->nationality = $nationality;
        $player->bowling_style = $bowling_style;

        return $player;
    }

    public function updateBattingSkills(
        $running,
        $defense,
        $attacking,
        $lofted,
        $vs_spin,
        $vs_pace,
        $footwork,
        $timing,
        $control
    ) {
        $this->running = $running;
        $this->defense = $defense;
        $this->attacking = $attacking;
        $this->lofted = $lofted;
        $this->vs_spin = $vs_spin;
        $this->vs_pace = $vs_pace;
        $this->footwork = $footwork;
        $this->timing = $timing;
        $this->control = $control;

        return $this;
    }

    public function updateBowlingSkills(
        $pace_flight,
        $swing_leg_spin,
        $slower_ball_off_spin,
        $seam_drift,
        $accuracy,
        $discipline,
        $bouncer_bounce,
        $yorker_arm_ball
    ) {
        $this->pace_flight = $pace_flight;
        $this->swing_leg_spin = $swing_leg_spin;
        $this->slower_ball_off_spin = $slower_ball_off_spin;
        $this->seam_drift = $seam_drift;
        $this->accuracy = $accuracy;
        $this->discipline = $discipline;
        $this->bouncer_bounce = $bouncer_bounce;
        $this->yorker_arm_ball = $yorker_arm_ball;

        return $this;
    }

    public function updateTpe($tpe, $banked_tpe)
    {
        $this->tpe = $tpe;
        $this->banked_tpe = $banked_tpe;

        return $this;
    }

    public function assignTeam($team_id)
    {
        $this->team_id = $team_id;

        return $this;
    }

    public function retire(Carbon $retired_at)
    {
        $this->retired_at = $retired_at;
        $this->retired_user_id = $this->user_id;
        $this->user_id = NULL;
        $this->team_id = NULL;

        return $this;
    }
}
