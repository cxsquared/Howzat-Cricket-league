<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\TeamSerializer;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ListTeamsController extends AbstractListController
{
    public $serializer = TeamSerializer::class;

    public $include = ['players', 'gm_user', 'agm_user'];

    protected function data(Request $request, Document $document)
    {
        return Team::all();
    }
}