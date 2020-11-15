<?php

namespace Cxsquared\HowzatCricketLeague\Update\Command;

use Flarum\User\User;

class CreateUpdate
{
    public $actor;

    public $data;

    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }

}