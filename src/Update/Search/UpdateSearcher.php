<?php

namespace Cxsquared\HowzatCricketLeague\Update\Search;

use Cxsquared\HowzatCricketLeague\Update\Event\Searching;
use Cxsquared\HowzatCricketLeague\Update\Search\Gambit\StatusGambit;
use Cxsquared\HowzatCricketLeague\Update\UpdateRepository;
use Flarum\Search\ApplySearchParametersTrait;
use Flarum\Search\GambitManager;
use Flarum\Search\SearchCriteria;
use Flarum\Search\SearchResults;

class UpdateSearcher
{
    use ApplySearchParametersTrait;

    protected $gambits;

    protected $updates;

    public function __construct(GambitManager $gambits, UpdateRepository $updates)
    {
       $this->gambits = $gambits;
       $this->updates = $updates; 

       $this->gambits->add(StatusGambit::class);
    }

    public function search(SearchCriteria $criteria, $limit = null, $offset = 0)
    {
        $actor = $criteria->actor;

        $query = $this->updates->query();

        $search = new UpdateSearch($query->getQuery(), $actor);

        $this->gambits->apply($search, $criteria->query);
        $this->applySort($search, $criteria->sort);
        $this->applyOffset($search, $offset);
        $this->applyLimit($search, $limit);

        event(new Searching($search, $criteria));

        $updates = $query->get();

        if ($areMoreResults = ($limit > 0 && $updates->count() > $limit)) {
            $updates->pop();
        }

        return new SearchResults($updates, $areMoreResults);
    }
}