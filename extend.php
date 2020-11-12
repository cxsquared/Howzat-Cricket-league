<?php

/*
 * This file is part of cxsquared/howzat-cricket-league.
 *
 * Copyright (c) 2020 cxsquared.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Cxsquared\HowzatCricketLeague;

use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Extend;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Model(User::class))
        ->hasOne('player', Player::class)
        ->hasOne('gm_team', Team::class)
        ->hasOne('agm_team', Team::class)
        ->hasMany('submitted_updates', Update::class),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddRelationships::class);
    }
];
