<?php

namespace Cxsquared\HowzatCricketLeague\Notification;

use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;

class UpdateDeniedBlueprint implements BlueprintInterface
{
    public $update;

    public $user; 

    public function __construct(Update $update, User $user)
    {
        $this->user = $user;
        $this->update = $update;
    }

    public function getSubject()
    {
        return $this->update;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
        return $this->update->updater_comment;
    }

    public static function getType()
    {
        return 'updateDenied';
    }

    public static function getSubjectModel()
    {
        return Update::class;
    }

}