<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
      'up' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  // Default to 12 because a team should only have 11 players
                  // this will put new players at the end by default
                  $table->tinyInteger('order')->default(12);
                  $table->string('role', 12)->nullable();
            });
      },
      'down' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->dropColumn('order');
                  $table->dropColumn('role');
            });
      }
];
