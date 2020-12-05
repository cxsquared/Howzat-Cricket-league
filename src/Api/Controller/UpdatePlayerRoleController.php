<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Player\Command\UpdatePlayerRoles;
use Cxsquared\HowzatCricketLeague\Player\PlayerRole;
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Support\Arr;
use Tobscure\JsonApi\Document;

class UpdatePlayerRolesController extends AbstractCreateController
{
    public $serializer = PlayerRole::class;

    public $inlcude = ['player', 'team'];

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
       $this->bus = $bus; 
    }

    public function data(ServerRequestInterface $request, Document $document)
    {
        $team_id = Arr::get($request->getQueryParams(), 'id');
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);

        return $this->bus->dispatch(
            new UpdatePlayerRoles($team_id, $actor, $data)
        );
    }
}