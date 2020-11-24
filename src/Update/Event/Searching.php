<?php

namespace Cxsquared\HowzatCricketLeague\Update\Event;

use Cxsquared\HowzatCricketLeague\Update\Search\UpdateSearch;
use flarum\Search\SearchCriteria;

class Searching
{
    public $search;

    public $criteria;

    public function __construct(UpdateSearch $search, SearchCriteria $criteria)
    {
        $this->search = $search;
        $this->criteria = $criteria;
    }
}