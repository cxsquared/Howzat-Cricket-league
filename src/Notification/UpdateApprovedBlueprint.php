<?php

namespace Cxsquared\HowzatCricketLeague\Notification;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;

class UpdateApprovedBlueprint implements BlueprintInterface
{
    public $player;

    public $user; 

    public function __construct(Player $player, User $user)
    {
        $this->player = $player;
        $this->user = $user;
    }

    public function getSubject()
    {
        return $this->player;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
    }

    public static function getType()
    {
        return 'updateApproved';
    }

    public static function getSubjectModel()
    {
        return Player::class;
    }

}