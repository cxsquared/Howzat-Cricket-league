<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;

class UpdateSerializer extends AbstractSerializer
{
    protected $type = 'updates';

    protected function getDefaultAttributes($update)
    {
        if (! ($update instanceof Update)) {
            throw new InvalidArgumentException (
                get_class($this).' can only serialize instances of '.Update::class
            );
        }

        return [
            'id'                => $update->id,
            'date'              => $this->formatDate($update->date),
            'link'              => $update->link,
            'type'              => $update->type,
            'comment'           => $update->comment,
            'tpe'               => $update->tpe,
            'status'            => $update->status,
            'isCapped'          => $update->is_capped,
            'submittedAt'       => $this->formatDate($update->submitted_at),
            'updatedAt'         => $this->formatDate($update->updated_at),
            'updaterComment'    => $this->actor->hasPermissionLike('update.edit') ? $update->updater_comment : ''
        ];
    }

    protected function submittedUser($update)
    {
        return $this->hasOne($update, BasicUserSerializer::class, 'submitted_user'); 
    }

    protected function updaterUser($update)
    {
        return $this->hasOne($update, BasicUserSerializer::class, 'updater_user'); 
    }
}