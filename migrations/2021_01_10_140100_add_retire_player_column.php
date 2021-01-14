<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
      'up' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->dateTime('retired_at')->nullable();
                  $table->unsignedInteger('retired_user_id')->nullable();
            });
      },
      'down' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->dropColumn('retired_at');
                  $table->dropcolumn('retired_user_id');
            });
      }
];
