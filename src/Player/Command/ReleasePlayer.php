<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Flarum\User\User;

class ReleasePlayer
{
    public $playerId;

    public $actor;

    public $data;

    public function __construct($playerId, User $actor)
    {
        $this->playerId = $playerId;
        $this->actor = $actor;
    }
}
