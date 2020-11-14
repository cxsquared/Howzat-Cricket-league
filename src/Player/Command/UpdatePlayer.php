<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Flarum\User\User;

class UpdatePlayer 
{
    public $playerId;

    public $actor;

    public $data;

    public function __construct($playerId, User $actor, array $data)
    {
        $this->playerId = $playerId;
        $this->actor = $actor;
        $this->data = $data;
    }
}