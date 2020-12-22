<?php

namespace Cxsquared\HowzatCricketLeague\Player\Event;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\user\User;

class Created 
{
    public $player;

    public $actor;

    public function __construct(Player $player, User $actor)
    {
        $this->player = $player;
        $this->actor = $actor;
    }
}