<?php

namespace Cxsquared\HowzatCricketLeague\Team\Command;

use Flarum\User\User;

class UpdateTeam 
{
    public $teamId;

    public $actor;

    public $data;

    public function __construct($teamId, User $actor, array $data)
    {
        $this->teamId = $teamId;
        $this->actor = $actor;
        $this->data = $data;
    }
}