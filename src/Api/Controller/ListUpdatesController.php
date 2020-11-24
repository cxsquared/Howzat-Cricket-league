<?php

namespace Cxsquared\HowzatCricketLeague\Api\Controller;

use Cxsquared\HowzatCricketLeague\Api\Serializer\UpdateSerializer;
use Cxsquared\HowzatCricketLeague\Update\Search\UpdateSearcher;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\UrlGenerator;
use Flarum\Search\SearchCriteria;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;

class ListUpdatesController extends AbstractListController
{
    public $serializer = UpdateSerializer::class;

    public $include = ['submittedUser', 'updaterUser'];

    public $sort = ['submittedAt' => 'asc'];

    public $sortFields = ['submittedAt'];

    protected $searcher;

    protected $url;

    public function __construct(UpdateSearcher $searcher, UrlGenerator $url)
    {
        $this->searcher = $searcher;
        $this->url = $url;
    }

    protected function data(Request $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $query = Arr::get($this->extractFilter($request), 'q');
        $sort = $this->extractSort($request);

        $criteria = new SearchCriteria($actor, $query, $sort);

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $load = $this->extractInclude($request);

        $results = $this->searcher->search($criteria, $limit, $offset, $load);

        $document->addPaginationLinks(
            $this->url->to('api')->route('updates.index'),
            $request->getQueryParams(),
            $offset,
            $limit,
            $results->areMoreResults() ? null : 0
        );

        return $results->getResults(); 
    }
}