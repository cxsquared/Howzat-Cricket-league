<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\PlayerSerializer;
use Cxsquared\HowzatCricketLeague\Player\Command\ReleasePlayer;
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Support\Arr;
use Tobscure\JsonApi\Document;

class ReleasePlayerController extends AbstractCreateController
{
    public $serializer = PlayerSerializer::class;

    public $inlcude = ['user', 'team'];

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    public function data(ServerRequestInterface $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'id');
        $actor = $request->getAttribute('actor');

        return $this->bus->dispatch(
            new ReleasePlayer($id, $actor)
        );
    }
}
