<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Flarum\User\User;

class UpdatePlayerRoles 
{
    public $team_id;

    public $actor;

    public $data;

    public function __construct($team_id, User $actor, array $data)
    {
        $this->team_id = $team_id;
        $this->actor = $actor;
        $this->data = $data;
    }
}