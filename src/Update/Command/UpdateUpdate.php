<?php

namespace Cxsquared\HowzatCricketLeague\Update\Command;

use Flarum\User\User;

class UpdateUpdate 
{
    public $updateId;

    public $actor;

    public $data;

    public function __construct($updateId, User $actor, array $data)
    {
        $this->updateId = $updateId;
        $this->actor = $actor;
        $this->data = $data;
    }
}