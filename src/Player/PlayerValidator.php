<?php

namespace Cxsquared\HowzatCricketLeague\Player;

use Flarum\Foundation\AbstractValidator;

class PlayerValidator extends AbstractValidator
{
    protected $player;
    protected $first_name;
    protected $last_name;

    public function getPlayer() {
        return $this->player;
    }

    public function setPlayer($player) {
        $this->player = $player;
    }

    public function getFirstName() {
        return $this->first_name;
    }

    public function setFirstName($first_name) {
        $this->first_name = $first_name;
    }

    public function getLastName() {
        return $this->last_name;
    }

    public function setLastName($last_name) {
        $this->first_name = $last_name;
    }

    protected function getRules() {
        $idSuffix = $this->player ? $this->player->id : 'NULL';
        $first_name = $this->player ? $this->player->first_name : $this->getFirstName();
        $last_name = $this->player ? $this->player->last_name : $this->getLastName();

        return [
            'first_name' => [
                'required',
                'min:3',
                'max:50',
                'unique:players,first_name,'.$idSuffix.',id,last_name,'.$last_name,
            ],
            'last_name' => [
                'required',
                'min:3',
                'max:50',
                'unique:players,last_name,'.$idSuffix.',id,first_name,'.$first_name,
            ],
            'nationality' => 'required',
            'bowlingStyle' => 'required',
            'age' => [
                'required',
                'gte:18',
                'lte:99'
            ],
            'height' => [
                'required',
                'gte:120',
                'lte:270'
            ],
            'weight' => [
                'required',
                'gte:50',
                'lte:130'
            ],
            'bowling_style' => 'required'
        ];
    }
}