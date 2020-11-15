<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::CreateTable(
    'updates', 
    function(Blueprint $table) {
        $table->increments('id');
        $table->date('date');
        $table->string('link');
        $table->string('type');
        $table->string('comment');
        $table->unsignedTinyInteger('tpe');

        $table->dateTime('submitted_at')->nullable();
        $table->unsignedInteger('submitted_user_id');

        $table->dateTime('updated_at')->nullable();
        $table->unsignedInteger('updater_user_id')->nullable();
        $table->string('status', 50)->default('pending');

        // Foreign Keys
        $table->foreign('submitted_user_id')
              ->references('id')
              ->on('users')
              ->onDelete('cascade');

        $table->foreign('updater_user_id')
              ->references('id')
              ->on('users')
              ->onDelete('set null');
    }
);
