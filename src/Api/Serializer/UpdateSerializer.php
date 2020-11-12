<?php

namespace Cxsquared\HowzatCricketLeague\Api\Serializer;

use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use InvalidArgumentException;

class UpdateSerializer extends AbstractSerializer
{
    protected $type = 'update';

    protected function getDefaultAttributes($update)
    {
        if (! ($update instanceof Update)) {
            throw new InvalidArgumentException (
                get_class($this).' can only serialize instances of '.Update::class
            );
        }

        return [
            'id'            => $update->id,
            'date'          => $this->formatDate($update->date),
            'link'          => $update->link,
            'type'          => $update->type,
            'tpe'           => $update->tpe,
            'status'        => $update->status,
            'submittedAt'  => $this->formatDate($update->submitted_at),
            'updatedAt'    => $this->formatDate($update->updated_at)
        ];
    }

    protected function submitted_user($update)
    {
        return $this->hasOne($update, BasicUserSerializer::class); 
    }

    protected function updater_user($update)
    {
        return $this->hasOne($update, BasicUserSerializer::class); 
    }
}