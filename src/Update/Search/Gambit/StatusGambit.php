<?php

namespace Cxsquared\HowzatCricketLeague\Update\Search\Gambit;

use Cxsquared\HowzatCricketLeague\Update\Search\UpdateSearch;
use Flarum\Search\AbstractRegexGambit;
use Cxsquared\HowzatCricketLeague\Update\UpdateRepository;
use Flarum\Search\AbstractSearch;
use LogicException;

class StatusGambit extends AbstractRegexGambit
{
    protected $pattern = 'status:(.+)';

    protected $updates;

    public function __construct(UpdateRepository $updates)
    {
       $this->updates = $updates;
    }

    public function apply(AbstractSearch $search, $bit)
    {
        if (! $search->getActor()->hasPermissionLike('update.edit')) {
            return false;
        }

        return parent::apply($search, $bit);
    }

    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        if (! $search instanceof UpdateSearch) {
            throw new LogicException('This gambit can only be applied on an UpdateSearch');
        }

        $status = trim($matches[1], '"');

        $search->getQuery()->where('status', $negate ? '!=': '=', $status);
    }
}