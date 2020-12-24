<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Cxsquared\HowzatCricketLeague\HclSettingsUtils;
use Cxsquared\HowzatCricketLeague\Player\Event\Created;
use Flarum\Discussion\Command\StartDiscussion;
use Flarum\Group\Group;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\UserRepository;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Events\Dispatcher;

class PlayerEvents
{
    protected $bus;

    protected $users;

    protected $settings;

    public function __construct(BusDispatcher $bus, UserRepository $users, SettingsRepositoryInterface $settings)
    {
        $this->bus = $bus;
        $this->users = $users;
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Created::class, [$this, 'onPlayerCreated']);
    }

    public function onPlayerCreated(Created $event)
    {
        // Post recruitment Thread
        $captainGroupId = HclSettingsUtils::GetCaptainGroupId($this->settings);
        $captains = Group::findOrFail($captainGroupId)->users()->get();

        $playerName = $event->player->first_name." ".$event->player->last_name;
        $postBody = "";
        foreach ($captains as &$captain) {
            $postBody .= "@".$captain->username." ";
        }
        $postBody .= "\n\n";

        $postBody .= "Username @".$event->actor->username."\n";
        $postBody .= "Player Name ".$playerName."\n";
        // TODO: Nataionality to translator
        $postBody .= "Nationality ".$event->player->nationality."\n";
        // TODO: Bowling style to translator
        $postBody .= "Bowling Style ".$event->player->bowling_style."\n";
        $postBody .= "\n";
        $postBody .= "Age ".$event->player->age."\n";
        $postBody .= "Height (cms) ".$event->player->height."\n";
        $postBody .= "Weight (kgs) ".$event->player->weight."\n";

        $botId = HclSettingsUtils::GetBotUserId($this->settings);
        $bot = $this->users->findOrFail($botId); 

        $playersTagId = HclSettingsUtils::GetPlayerTagId($this->settings);

        $data = array(
            "attributes" => array(
                "title" => $playerName,
                "content" => $postBody 
            ),
            "relationships" => array(
                "tags" => array(
                    "data" => array(
                        array(
                            "id" => $playersTagId,
                            "type" => "tags"
                        )
                    )
                )
            )
        );

        return $this->bus->dispatch(
            new StartDiscussion($bot, $data, '127.0.0.1')
        );
    }
}