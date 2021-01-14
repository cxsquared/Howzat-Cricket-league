<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
      'up' => function (Builder $schema) {
            $schema->table('player_movements', function (Blueprint $table) {
                  $table->tinyInteger('season')->nullable();
                  $table->tinyInteger('draft_number')->nullable();
            });
      },
      'down' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->dropColumn('season');
                  $table->dropColumn('draft_number');
            });
      }
];
