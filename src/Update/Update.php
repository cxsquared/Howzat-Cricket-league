<?php

namespace Cxsquared\HowzatCricketLeague\Update;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;
use Flarum\User\User;

class Update extends AbstractModel
{
    protected $dates = [
        'date',
        'submitted_at',
        'updated_at'
    ];

    public function submitted_user()
    {
        return $this->belongsTo(User::class);
    }

    public function updater_user()
    {
        return $this->belongsTo(User::class);
    }

    public static function createUpdate($date, $submitted_user_id, $link, $type, $tpe)
    {
        $update = new static;

        $update->submitted_at = Carbon::now();
        $update->submitted_user_id = $submitted_user_id;
        $update->date = $date;
        $update->link = $link;
        $update->type = $type;
        $update->tpe = $tpe;

        return $update;
    }

    public function approve($updater_user_id)
    {
        return $this->update_update($updater_user_id, "approved");
    }

    public function deny($updater_user_id)
    {
        return $this->update_update($updater_user_id, "deny");
    }

    protected function update_update($updater_user_id, string $status)
    {
        $this->updater_user_id = $updater_user_id;
        $this->updated_at = Carbon::now();
        $this->status = $status;

        return $this;
    }
}