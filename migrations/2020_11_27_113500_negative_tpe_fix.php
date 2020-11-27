<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
      'up' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->integer('tpe')->default(30)->change();
                  $table->integer('banked_tpe')->default(30)->change();
            });
      },
      'down' => function (Builder $schema) {
            $schema->table('players', function (Blueprint $table) {
                  $table->integer('tpe')->unsigned()->default(30)->change();
                  $table->integer('banked_tpe')->unsigned()->default(30)->change();
            });
      }
];
