<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable(
    'players',
    function (Blueprint $table) {
        $table->increments('id');
        $table->unsignedInteger('user_id')->nullable();
        $table->unsignedInteger('team_id')->nullable();

        // Player Information
        $table->string('first_name', 100);
        $table->string('last_name', 100);
        $table->unique(array('first_name', 'last_name'));

        $table->unsignedInteger('age');
        $table->unsignedInteger('height');
        $table->unsignedInteger('weight');
        $table->unsignedInteger('nationality');

        $table->unsignedInteger('tpe')->default('0');
        $table->unsignedInteger('banked_tpe')->default('30');

        // Batting Skills
        $table->unsignedTinyInteger('running')->default(40);
        $table->unsignedTinyInteger('defense')->default(40);
        $table->unsignedTinyInteger('attacking')->default(40);
        $table->unsignedTinyInteger('lofted')->default(40);
        $table->unsignedTinyInteger('vs_spin')->default(40);
        $table->unsignedTinyInteger('vs_pace')->default(40);
        $table->unsignedTinyInteger('footwork')->default(40);
        $table->unsignedTinyInteger('timing')->default(40);
        $table->unsignedTinyInteger('control')->default(40);

        // Bowling Skills
        $table->string('bowling_style', 50);
        $table->unsignedTinyInteger('pace')->default(40);
        $table->unsignedTinyInteger('swing')->default(40);
        $table->unsignedTinyInteger('slower_ball')->default(40);
        $table->unsignedTinyInteger('seam')->default(40);
        $table->unsignedTinyInteger('accuracy')->default(40);
        $table->unsignedTinyInteger('discipline')->default(40);
        $table->unsignedTinyInteger('bouncer')->default(40);
        $table->unsignedTinyInteger('yorker')->default(40);

        // Audit Trail
        $table->dateTime('created_at')->nullable();
        $table->dateTime('updated_at')->nullable();

        // Foreign Keys
        $table->foreign('user_id')
              ->references('id')
              ->on('users')
              ->onDelete('set null');

        $table->foreign('team_id')
              ->references('id')
              ->on('teams')
              ->onDelete('set null');
    }
);