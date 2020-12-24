<?php

namespace Cxsquared\HowzatCricketLeague\Team\Command;

use Cxsquared\HowzatCricketLeague\HclSettingsUtils;
use Cxsquared\HowzatCricketLeague\Team\Event\TeamAgmChanged;
use Cxsquared\HowzatCricketLeague\Team\Event\TeamGmChanged;
use Cxsquared\HowzatCricketLeague\Team\Team;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\UserRepository;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class UpdateTeamHandler
{
    use DispatchEventsTrait;

    protected $users;

    protected $settings;

    public function __construct(Dispatcher $events, UserRepository $users,
                                SettingsRepositoryInterface $settings)
    {
        $this->events = $events;
        $this->users = $users;
        $this->settings = $settings;
    }

    public function handle(UpdateTeam $command)
    {
        $actor = $command->actor;
        $relationships = Arr::get($command->data, 'relationships', []);

        $team = Team::findOrFail($command->teamId);

        $gm = $team->gm_user();
        $agm = $team->agm_user();

        if (isset($relationships['gmUser']['data']) && is_array($relationships['gmUser']['data'])) {
            $actor->assertPermission($actor->can('update.team'));

            $id = Arr::get($relationships['gmUser']['data'][0], 'id');
            $newGm = $this->users->findOrFail($id, $actor);

            $oldGm = $gm;

            if ($oldGm !== $newGm) {
                $team->raise(
                    new TeamGmChanged($team, $actor, $oldGm)
                );

                $captainGroupId = HclSettingsUtils::GetCaptainGroupId($this->settings);

                if ($oldGm) {
                    $oldGm->groups()->detach($captainGroupId);
                }

                $newGm->groups()->attach($captainGroupId);

                $team->gm_user()->associate($newGm);

                $gm = $newGm;
            }
        }

        if (isset($relationships['agmUser']['data']) && is_array($relationships['agmUser']['data'])) {
            if ($gm !== $actor) {
                $actor->assertPermission($actor->can('update.team'));
            }

            $id = Arr::get($relationships['agmUser']['data'][0], 'id');
            $newAgm = $this->users->findOrFail($id, $actor);

            $oldAgm = $team->agm_user();

            if ($oldAgm !== $newAgm) {
                $team->raise(
                    new TeamAgmChanged($team, $actor, $oldAgm)
                );

                $viceCaptainGroupId = HclSettingsUtils::GetViceCaptainGroupId($this->settings);

                if ($oldAgm) {
                    $oldAgm->groups()->detach($viceCaptainGroupId);
                }
                $newAgm->groups()->attach($viceCaptainGroupId);

                $team->agm_user()->associate($newAgm);
                $agm = $newAgm;
            }
        }

        $team->save();

        $this->dispatchEventsFor($team, $actor);

        return $team;
    }
}