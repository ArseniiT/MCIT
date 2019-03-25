 <?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlightPilotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flight_pilot', function (Blueprint $table) {
            $table->biginteger('flight_id')->unsigned();
            $table->biginteger('pilot_id')->unsigned();

            $table->foreign('flight_id')
            ->references('id')->on('flight');
            $table->foreign('pilot_id')
            ->references('id')->on('pilot');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flight_pilot');
    }
}
