<?php

namespace Cxsquared\HowzatCricketLeague\Player\Event;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\user\User;

class Saving 
{
    public $player;

    public $actor;

    public $data;

    public function __construct(Player $player, User $actor, array $data)
    {
        $this->player = $player;
        $this->actor = $actor;
        $this->data = $data;
    }
}