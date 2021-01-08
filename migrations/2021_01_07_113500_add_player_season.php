<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
      'up' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  // TODO: remove this default once I get the setting in
                  $table->tinyInteger('season')->nullable()->default(2);
            });
      },
      'down' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->dropColumn('season');
            });
     }
];
