<?php

namespace Cxsquared\HowzatCricketLeague\Player\Search;

use Cxsquared\HowzatCricketLeague\Player\Event\Searching;
use Cxsquared\HowzatCricketLeague\Player\PlayerRepository;
use Flarum\Search\ApplySearchParametersTrait;
use Flarum\Search\GambitManager;
use Flarum\Search\SearchCriteria;
use Flarum\Search\SearchResults;

/*
 * Takes a PlayerSearchCriteria object, performs a search using gambits,
 * and spits out a PlayerSearchResults object.
 */
class PlayerSearcher
{
    use ApplySearchParametersTrait;

    protected $gambits;

    protected $players;

    public function __construct(GambitManager $gambits, PlayerRepository $players)
    {
        $this->gambits = $gambits;
        $this->players = $players;
    }

    public function search(SearchCriteria $criteria, $limit = null, $offset = 0)
    {
        $actor = $criteria->actor;

        $query = $this->players->query();

        $search = new PlayerSearch($query->getQuery(), $actor);

        $this->gambits->apply($search, $criteria->query);
        $this->applySort($search, $criteria->sort);
        $this->applyOffset($search, $offset);
        $this->applyLimit($search, $limit);

        event(new Searching($search, $criteria));

        $players = $query->get();

        if ($areMoreResults = ($limit > 0 && $players->count() > $limit)) {
            $players->pop();
        }

        return new SearchResults($players, $areMoreResults);
    }
}