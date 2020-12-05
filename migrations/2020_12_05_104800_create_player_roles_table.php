<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::CreateTable(
    'player_roles', 
    function(Blueprint $table) {
        $table->increments('id');
        $table->unsignedInteger('player_id');
        $table->unsignedInteger('team_id');
        $table->string('role')->default('batter');
        $table->unsignedTinyInteger('order');

        // Audit Trail
        $table->dateTime('created_at')->nullable();
        $table->dateTime('updated_at')->nullable();

        // Foreign Keys
        $table->foreign('player_id')
              ->references('id')
              ->on('players')
              ->onDelete('cascade');

        $table->foreign('team_id')
              ->references('id')
              ->on('teams')
              ->onDelete('cascade');

        $table->unique(array('player_id', 'team_id'));
    }
);
