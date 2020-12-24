<?php

namespace Cxsquared\HowzatCricketLeague\Team\Event;

use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\User\User;

class TeamAgmChanged 
{
    public $team;

    public $actor;

    public $oldAgm;

    public function __construct(Team $team, User $actor, $oldAgm)
    {
        $this->team = $team;
        $this->actor = $actor;
        $this->oldAgm = $oldAgm;
    }
}