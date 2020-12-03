<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
      'up' => function (Builder $schema) {
            $schema->table('teams', function (Blueprint $table) {
                  $table->string('primary_color', 6)->nullable();
                  $table->string('secondary_color', 6)->nullable();
            });
      },
      'down' => function (Builder $schema) {
            $schema->table('teams', function (Blueprint $table) {
                  $table->dropColumn('primary_color');
                  $table->dropColumn('secondary_color');
            });
     }
];
