<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\PlayerSerializer;
use Cxsquared\HowzatCricketLeague\Player\Command\CreatePlayer;
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Support\Arr;
use Tobscure\JsonApi\Document;

class CreatePlayerController extends AbstractCreateController
{
    public $serializer = PlayerSerializer::class;

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
       $this->bus = $bus; 
    }

    public function data(ServerRequestInterface $request, Document $document)
    {
        return $this->bus->dispatch(
            new CreatePlayer($request->getAttributes('actor'), Arr::get($request->getParsedBody(), 'data', []))
        );
    }
}