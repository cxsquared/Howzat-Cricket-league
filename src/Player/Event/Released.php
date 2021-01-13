<?php

namespace Cxsquared\HowzatCricketLeague\Player\Event;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\user\User;

class Released
{
    public $player;

    public $team;

    public $actor;

    public function __construct(Player $player, Team $team, User $actor)
    {
        $this->player = $player;

        $this->team = $team;

        $this->actor = $actor;
    }
}
