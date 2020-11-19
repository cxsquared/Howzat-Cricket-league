<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::CreateTable(
    'player_movements', 
    function(Blueprint $table) {
        $table->increments('id');
        $table->dateTime('date');
        $table->unsignedInteger('player_id')->nullable();
        $table->unsignedInteger('from_team_id')->nullable();
        $table->unsignedInteger('to_team_id')->nullable();
        $table->string('type');

        // Audit Trail
        $table->dateTime('created_at')->nullable();
        $table->dateTime('updated_at')->nullable();

        // Foreign Keys
        $table->foreign('player_id')
              ->references('id')
              ->on('players')
              ->onDelete('cascade');

        $table->foreign('from_team_id')
              ->references('id')
              ->on('teams')
              ->onDelete('set null');

        $table->foreign('to_team_id')
              ->references('id')
              ->on('teams')
              ->onDelete('set null');
    }
);
