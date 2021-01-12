<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\TeamSerializer;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ShowTeamController extends AbstractShowController
{
    public $serializer = TeamSerializer::class;

    public $include = ['players', 'gm_user', 'agm_user', 'players.user', 'players.team'];

    protected function data(Request $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'id');

        return Team::findOrFail($id);
    }
}
