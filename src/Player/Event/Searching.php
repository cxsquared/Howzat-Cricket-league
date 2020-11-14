<?php

namespace Cxsquared\HowzatCricketLeague\Player\Event;

use Cxsquared\HowzatCricketLeague\Player\Search\PlayerSearch;
use flarum\Search\SearchCriteria;

class Searching
{
    public $search;

    public $criteria;

    public function __construct(PlayerSearch $search, SearchCriteria $criteria)
    {
        $this->search = $search;
        $this->criteria = $criteria;
    }
}