<?php

namespace Cxsquared\HowzatCricketLeague\Update\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\HclSettingsUtils;
use Cxsquared\HowzatCricketLeague\Update\Event\Saving;
use Cxsquared\HowzatCricketLeague\Update\TypeHelper;
use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Foundation\ValidationException;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreateUpdateHandler
{
    use DispatchEventsTrait;

    protected $settings;

    public function __construct(Dispatcher $events, SettingsRepositoryInterface $settings)
    {
       $this->events = $events; 
       $this->settings = $settings;
    }

    public function handle(CreateUpdate $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertRegistered();

        $type = Arr::get($data, 'attributes.type');
        $date = new Carbon(Arr::get($data, 'attributes.date'));
        $link = Arr::get($data, 'attributes.link');
        $is_capped = TypeHelper::isCapped($type);

        if ($link !== null && $link !== '' && $actor->submitted_updates()->where('link', $link)->where('type', $type)->where('status', '<>', 'denied')->exists()) {
            // TODO: Update this to use the translator
            throw new ValidationException(['update' => "You've already claimed this link."]);
        }

        $updatesThisWeek = $actor->submitted_updates()->whereDate('date', $date)->where('status', '<>', 'denied')->get();

        $update = Update::createUpdate(
            $date,
            $actor->id,
            Arr::get($data, 'attributes.link'),
            $type,
            Arr::get($data, 'attributes.comment'),
            Arr::get($data, 'attributes.tpe'),
            $is_capped
        );

        TypeHelper::canClaim($updatesThisWeek, $update, HclSettingsUtils::GetMaxWeeklyCapped($this->settings));

        $this->events->dispatch(
            new Saving($update, $actor, $data)
        );

        $update->save();

        $this->dispatchEventsFor($update, $actor);

        return $update;
    }
}