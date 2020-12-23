<?php

namespace Cxsquared\HowzatCricketLeague\Team\Event;

use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\User\User;

class TeamGmChanged 
{
    public $team;

    public $actor;

    public $oldGm;

    public function __construct(Team $team, User $actor, $oldGm)
    {
        $this->team = $team;
        $this->actor = $actor;
        $this->oldGm = $oldGm;
    }
}