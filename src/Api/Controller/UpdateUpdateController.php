<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\UpdateSerializer;
use Cxsquared\HowzatCricketLeague\Update\Command\UpdateUpdate;
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Support\Arr;
use Tobscure\JsonApi\Document;

class UpdateUpdateController extends AbstractCreateController
{
    public $serializer = UpdateSerializer::class;

    public $inlcude = ['submittedUser', 'updaterUser'];

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
       $this->bus = $bus; 
    }

    public function data(ServerRequestInterface $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'id');
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);

        return $this->bus->dispatch(
            new UpdateUpdate($id, $actor, $data)
        );
    }
}