<?php

namespace Cxsquared\HowzatCricketLeague\Update\Search\Gambit;

use Cxsquared\HowzatCricketLeague\Update\Search\UpdateSearch;
use Flarum\Search\AbstractRegexGambit;
use Cxsquared\HowzatCricketLeague\Update\UpdateRepository;
use Flarum\Search\AbstractSearch;
use Flarum\User\UserRepository;
use LogicException;

class UsernameGambit extends AbstractRegexGambit
{
    protected $pattern = 'username:(.+)';

    protected $updates;

    protected $users;

    public function __construct(UpdateRepository $updates, UserRepository $users)
    {
       $this->updates = $updates;
       $this->users = $users;
    }

    public function apply(AbstractSearch $search, $bit)
    {
        return parent::apply($search, $bit);
    }

    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        if (! $search instanceof UpdateSearch) {
            throw new LogicException('This gambit can only be applied on an UpdateSearch');
        }

        $username = trim($matches[1], '"');
        $id = $this->users->getIdForUsername($username);

        $search->getQuery()->where('submitted_user_id', $negate ? '!=': '=', $id);
    }
}