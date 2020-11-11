<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::CreateTable(
    'teams',
    function(Blueprint $table) {
        $table->increments('id');
        $table->string('name');
        $table->string('logo_link');
        $table->unsignedInteger('gm_user_id')->nullable();
        $table->unsignedInteger('agm_user_id')->nullable();

        // Audit Trail
        $table->dateTime('created_at')->nullable();
        $table->dateTime('updated_at')->nullable();

        // Foreign Keys
        $table->foreign('gm_user_id')
              ->references('id')
              ->on('users')
              ->onDelete('set null');

        $table->foreign('agm_user_id')
              ->references('id')
              ->on('users')
              ->onDelete('set null');
    }
);