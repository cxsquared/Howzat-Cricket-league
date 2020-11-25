<?php

namespace Cxsquared\HowzatCricketLeague\Update;

use Carbon\Carbon;
use Egulias\EmailValidator\Warning\Comment;
use Flarum\Database\AbstractModel;
use Flarum\Foundation\EventGeneratorTrait;
use Flarum\User\User;

class Update extends AbstractModel
{
    use EventGeneratorTrait;

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

    public static function createUpdate($date, $submitted_user_id, $link,
                                        $type, $comment, $tpe, $is_capped)
    {
        $update = new static;

        $update->submitted_at = Carbon::now();
        $update->submitted_user_id = $submitted_user_id;
        $update->date = $date;
        $update->link = $link;
        $update->type = $type;
        $update->comment = $comment;
        $update->tpe = (int) $tpe;
        $update->is_capped = (bool) $is_capped;

        return $update;
    }

    public function approve($updater_user_id)
    {
        return $this->update_update($updater_user_id, "approved");
    }

    public function deny($updater_user_id)
    {
        return $this->update_update($updater_user_id, "denied");
    }

    public function under_review($updater_user_id)
    {
        return $this->update_update($updater_user_id, "under_review");
    }

    protected function update_update($updater_user_id, string $status)
    {
        $this->updater_user_id = $updater_user_id;
        $this->updated_at = Carbon::now();
        $this->status = $status;

        return $this;
    }
}