<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Flarum\Foundation\AbstractValidator;

class PlayerValidator extends AbstractValidator
{
    protected $player;

    public function getPlayer() {
        return $this->player;
    }

    public function setPlayer($player) {
        $this->player = $player;
    }

    protected function getRules() {
        $idSuffix = $this->player ? $this->player->id : 'NULL';

        return [
            'first_name' => [
                'required',
                'min:3',
                'max:50',
                'unique:players,first_name,'.$idSuffix.',id,last_name,'.$this->player->last_name,
            ],
            'last_name' => [
                'required',
                'min:3',
                'max:50',
                'unique:players,last_name,'.$idSuffix.',id,first_name,'.$this->player->first_name,
            ]
        ];
    }
}