<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\UpdateSerializer;
use Cxsquared\HowzatCricketLeague\Update\Command\CreateUpdate;
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\contracts\bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateUpdateController extends AbstractCreateController
{
    public $serializer = UpdateSerializer::class;

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
       $this->bus = $bus; 
    }

    public function data(ServerRequestInterface $request, Document $document) 
    {
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);

        return $this->bus->dispatch(
            new CreateUpdate($actor, $data)
        );
    }
}