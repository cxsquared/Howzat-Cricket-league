<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::CreateTable(
    'updates', 
    function(Blueprint $table) {
        $table->increments('id');
        $table->string('link', 256);
        $table->string('type', 256);
        $table->unsignedTinyInteger('tpe');

        $table->dateTime('submitted_at')->nullable();
        $table->unsignedInteger('submitted_user_id');

        $table->dateTime('approved_at')->nullable();
        $table->unsignedInteger('approved_user_id')->nullable();

        // Foreign Keys
        $table->foreign('submitted_user_id')
              ->references('id')
              ->on('users')
              ->onDelete('cascade');

        $table->foreign('approved_user_id')
              ->references('id')
              ->on('users')
              ->onDelete('set null');
    }
);
