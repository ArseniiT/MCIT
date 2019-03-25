<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePilotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pilot', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('experience');
            $table->timestamps();
            $table->biginteger('airline_id')->unsigned()->nullable();
            $table->foreign('airline_id')
            ->references('id')->on('airline');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pilot');
    }
}
