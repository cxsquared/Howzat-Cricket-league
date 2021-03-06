<?php

namespace Cxsquared\HowzatCricketLeague\Update\Event;

use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\user\User;

class Denied 
{
    public $update;

    public $actor;

    public $data;

    public function __construct(Update $update, User $actor, array $data)
    {
        $this->update = $update;
        $this->actor = $actor;
        $this->data = $data;
    }
}