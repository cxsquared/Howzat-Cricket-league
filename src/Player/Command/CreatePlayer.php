<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Flarum\User\User;

class CreatePlayer
{
    public $actor;

    public $data;

    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}