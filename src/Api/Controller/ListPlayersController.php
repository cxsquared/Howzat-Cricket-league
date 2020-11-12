<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\PlayerSerializer;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ListPlayersController extends AbstractListController
{
    public $serializer = PlayerSerializer::class;

    protected function data(Request $request, Document $document)
    {
        return Player::all();
    }
}