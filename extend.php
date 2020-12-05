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

use Cxsquared\HowzatCricketLeague\Api\Controller\CreatePlayerController;
use Cxsquared\HowzatCricketLeague\Api\Controller\CreateUpdateController;
use Cxsquared\HowzatCricketLeague\Api\Controller\DownloadPlayersController;
use Cxsquared\HowzatCricketLeague\Api\Controller\ListPlayersController;
use Cxsquared\HowzatCricketLeague\Api\Controller\ListTeamsController;
use Cxsquared\HowzatCricketLeague\Api\Controller\ListUpdatesController;
use Cxsquared\HowzatCricketLeague\Api\Controller\ShowPlayerController;
use Cxsquared\HowzatCricketLeague\Api\Controller\ShowTeamController;
use Cxsquared\HowzatCricketLeague\Api\Controller\ShowUserPlayerController;
use Cxsquared\HowzatCricketLeague\Api\Controller\UpdatePlayerController;
use Cxsquared\HowzatCricketLeague\Api\Controller\UpdatePlayerRolesController;
use Cxsquared\HowzatCricketLeague\Api\Controller\UpdateUpdateController;
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
        ->hasOne('gm_team', Team::class, 'gm_user_id')
        ->hasOne('agm_team', Team::class, 'agm_user_id')
        ->hasMany('submitted_updates', Update::class, 'submitted_user_id'),

    (new Extend\Routes('api'))
        ->get('/users/{id}/player', 'users.player', ShowUserPlayerController::class)
        ->get('/players', 'players.index', ListPlayersController::class)
        ->get('/players/download', 'players.download', DownloadPlayersController::class)
        ->get('/players/{id}', 'players.show', ShowPlayerController::class)
        ->post('/players', 'players', CreatePlayerController::class)
        ->patch('/players/{id}', 'players.update', UpdatePlayerController::class)
        ->post('/updates', 'updates', CreateUpdateController::class)
        ->get('/updates', 'updates.index', ListUpdatesController::class)
        ->patch('/updates/{id}', 'updates.update', UpdateUpdateController::class)
        ->get('/teams', 'teams', ListTeamsController::class)
        ->get('/teams/{id}', 'teams.show', ShowTeamController::class)
        ->patch('/teams/{id}/roles', 'roles.update', UpdatePlayerRolesController::class),
    
    (new Extend\Frontend('forum'))
        ->route('/user/{username}/player', 'user.player')
        ->route('/user/{username}/updates', 'user.updates')
        ->route('/player/create', 'player.create')
        ->route('/players', 'players')
        ->route('/updates', 'updates')
        ->route('/teams/{id}', 'teams.show')
        ->route('/teams', 'teams'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddRelationships::class);
        $events->subscribe(Listener\AddSettings::class);
        $events->subscribe(Listener\SendUpdateNotifications::class);
        $events->subscribe(Listener\AddNotifications::class);
    }
];
