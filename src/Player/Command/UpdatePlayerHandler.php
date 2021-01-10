<?php

namespace Cxsquared\HowzatCricketLeague\Player\Command;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Event\Retired;
use Cxsquared\HowzatCricketLeague\Player\Event\Saving;
use Cxsquared\HowzatCricketLeague\Player\Player;
use Cxsquared\HowzatCricketLeague\Player\PlayerMovement;
use Cxsquared\HowzatCricketLeague\Player\PlayerMovementUtils;
use Cxsquared\HowzatCricketLeague\Player\PlayerRepository;
use Cxsquared\HowzatCricketLeague\Player\PlayerValidator;
use Cxsquared\HowzatCricketLeague\Player\TpeHelper;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use LogicException;

class UpdatePlayerHandler
{
    use DispatchEventsTrait;

    protected $players;

    protected $validator;

    protected $translator;

    public function __construct(
        Dispatcher $events,
        PlayerRepository $players,
        PlayerValidator $validator
    ) {
        $this->events = $events;
        $this->players = $players;
        $this->validator = $validator;
        $this->translator = app(Translator::class);
    }

    public function handle(UpdatePlayer $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $player = Player::findOrFail($command->playerId);
        $canEdit = $actor->can('edit', $player);
        $isActorsPlayer = $actor->id === $player->user_id;

        $attributes = Arr::get($data, 'attributes', []);

        if (!$isActorsPlayer || $this->isLoweringSkill($player, $attributes)) {
            $actor->assertPermission($canEdit);
        }

        $originalTpa = TpeHelper::calcuateTpa($player);

        $player = $this->updateBattingSkills($player, $attributes);
        $player = $this->updateBowlingSkills($player, $attributes);

        $newTpa = TpeHelper::calcuateTpa($player);

        $tpaThisUpdate = $newTpa - $originalTpa;

        if ($tpaThisUpdate > $player->banked_tpe) {
            throw new ValidationException(['player' => $this->translator->trans('hcl.api.not_enough_tpe')]);
        }

        $banked_tpe = $player->banked_tpe - $tpaThisUpdate;
        $player = $player->updateTpe($player->tpe, $banked_tpe);
        $player = $player->updateUpdatedAt();

        if (isset($attributes['retire']) && $attributes['retire'] === true) {
            if ($player->retired_user_id !== NULL || $player->retired_at !== NULL) {
                throw new LogicException("This player has already retired");
            }

            $player->retire(Carbon::now());
            $player_movement = PlayerMovement::create($player->id, PlayerMovementUtils::retirement(), $player->team_id, NULL, Carbon::now());

            $this->events->dispatch(
                new Retired($player, $actor, $data)
            );

            $player_movement->save();
        }

        $this->events->dispatch(
            new Saving($player, $actor, $data)
        );

        $this->validator->setPlayer($player);
        $this->validator->assertValid($player->getDirty());

        $player->save();

        $this->dispatchEventsFor($player, $actor);

        return $player;
    }

    private function isLoweringSkill(Player $player, array $attributes)
    {
        $isLowering = false;

        if (isset($attributes['running'])) {
            $isLowering = $isLowering || $player->running > $attributes['running'];
        }
        if (isset($attributes['defense'])) {
            $isLowering = $isLowering || $player->defense > $attributes['defense'];
        }
        if (isset($attributes['attacking'])) {
            $isLowering = $isLowering || $player->attacking > $attributes['attacking'];
        }
        if (isset($attributes['lofted'])) {
            $isLowering = $isLowering || $player->lofted > $attributes['lofted'];
        }
        if (isset($attributes['vsSpin'])) {
            $isLowering = $isLowering || $player->vs_spin > $attributes['vsSpin'];
        }
        if (isset($attributes['vsPace'])) {
            $isLowering = $isLowering || $player->vs_pace > $attributes['vsPace'];
        }
        if (isset($attributes['footwork'])) {
            $isLowering = $isLowering || $player->footwork > $attributes['footwork'];
        }
        if (isset($attributes['timing'])) {
            $isLowering = $isLowering || $player->timing > $attributes['timing'];
        }
        if (isset($attributes['control'])) {
            $isLowering = $isLowering || $player->control > $attributes['control'];
        }

        if (isset($attributes['paceFlight'])) {
            $isLowering = $isLowering || $player->pace_flight > $attributes['paceFlight'];
        }
        if (isset($attributes['swingLegSpin'])) {
            $isLowering = $isLowering || $player->swing_leg_spin > $attributes['swingLegSpin'];
        }
        if (isset($attributes['slowerBallOffSpin'])) {
            $isLowering = $isLowering || $player->slower_ball_off_spin > $attributes['slowerBallOffSpin'];
        }
        if (isset($attributes['seamDrift'])) {
            $isLowering = $isLowering || $player->seam_drift > $attributes['seamDrift'];
        }
        if (isset($attributes['accuracy'])) {
            $isLowering = $isLowering || $player->accuracy > $attributes['accuracy'];
        }
        if (isset($attributes['discipline'])) {
            $isLowering = $isLowering || $player->discipline > $attributes['discipline'];
        }
        if (isset($attributes['bouncerBounce'])) {
            $isLowering = $isLowering || $player->bouncer_bounce > $attributes['bouncerBounce'];
        }
        if (isset($attributes['yorkerArmBall'])) {
            $isLowering = $isLowering || $player->yorker_arm_ball > $attributes['yorkerArmBall'];
        }

        return $isLowering;
    }

    private function updateBattingSkills(Player $player, array $attributes)
    {
        if (isset($attributes['running'])) {
            $player->running = $attributes['running'];
        }
        if (isset($attributes['defense'])) {
            $player->defense = $attributes['defense'];
        }
        if (isset($attributes['attacking'])) {
            $player->attacking = $attributes['attacking'];
        }
        if (isset($attributes['lofted'])) {
            $player->lofted = $attributes['lofted'];
        }
        if (isset($attributes['vsSpin'])) {
            $player->vs_spin = $attributes['vsSpin'];
        }
        if (isset($attributes['vsPace'])) {
            $player->vs_pace = $attributes['vsPace'];
        }
        if (isset($attributes['footwork'])) {
            $player->footwork = $attributes['footwork'];
        }
        if (isset($attributes['timing'])) {
            $player->timing = $attributes['timing'];
        }
        if (isset($attributes['control'])) {
            $player->control = $attributes['control'];
        }

        return $player;
    }

    private function updateBowlingSkills(Player $player, array $attributes)
    {
        if (isset($attributes['paceFlight'])) {
            $player->pace_flight = $attributes['paceFlight'];
        }
        if (isset($attributes['swingLegSpin'])) {
            $player->swing_leg_spin = $attributes['swingLegSpin'];
        }
        if (isset($attributes['slowerBallOffSpin'])) {
            $player->slower_ball_off_spin = $attributes['slowerBallOffSpin'];
        }
        if (isset($attributes['seamDrift'])) {
            $player->seam_drift = $attributes['seamDrift'];
        }
        if (isset($attributes['accuracy'])) {
            $player->accuracy = $attributes['accuracy'];
        }
        if (isset($attributes['discipline'])) {
            $player->discipline = $attributes['discipline'];
        }
        if (isset($attributes['bouncerBounce'])) {
            $player->bouncer_bounce = $attributes['bouncerBounce'];
        }
        if (isset($attributes['yorkerArmBall'])) {
            $player->yorker_arm_ball = $attributes['yorkerArmBall'];
        }

        return $player;
    }
}
