<?php

namespace Cxsquared\HowzatCricketLeague\Team\Command;

use Cxsquared\HowzatCricketLeague\Team\Event\TeamGmChanged;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\User\UserRepository;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class UpdateTeamHandler
{
    use DispatchEventsTrait;

    protected $users;

    public function __construct(Dispatcher $events, UserRepository $users)
    {
        $this->events = $events;
        $this->users = $users;
    }

    public function handle(UpdateTeam $command)
    {
        $actor = $command->actor;
        $relationships = Arr::get($command->data, 'relationships', []);

        $team = Team::findOrFail($command->teamId);

        if (isset($relationships['gmUser']['data']) && is_array($relationships['gmUser']['data'])) {
            $actor->assertPermission($actor->can('edit', $team));

            $id = Arr::get($relationships['gmUser']['data'][0], 'id');
            $newGm = $this->users->findOrFail($id, $actor);

            $oldGm = $team->gm_user();

            if ($oldGm !== $newGm) {
                $team->raise(
                    new TeamGmChanged($team, $actor, $oldGm)
                );

                $team->gm_user()->associate($newGm);
            }
        }

        $team->save();

        $this->dispatchEventsFor($team, $actor);

        return $team;
    }
}