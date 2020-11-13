<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\PlayerSerializer;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ShowPlayerController extends AbstractShowController
{
    public $serializer = PlayerSerializer::class;

    public $include = ['user', 'team'];

    protected function data(Request $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'id');

        return Player::findOrFail($id);
    }
}