<?php

namespace Cxsquared\HowzatCricketLeague\Update;

class UpdateRepository
{
    public function query()
    {
        return Update::query();
    }

    public function findOrFail($id)
    {
        $query = Update::where('id', $id);

        return $query->firstOrFail();
    }

}