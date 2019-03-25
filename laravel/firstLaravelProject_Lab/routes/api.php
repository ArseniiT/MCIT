<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/hel', 'AirlineControllerAPI@hello');
Route::get('/airlines', 'AirlineControllerAPI@getAllAirlines');
Route::get('/airlines/{id}', 'AirlineControllerAPI@getAirlineByID');
Route::get('/airlines/byworth/{worth}', 'AirlineControllerAPI@getAirlinesByWorth');
Route::get('/airlines/byworth/{worth}/order/{order}', 'AirlineControllerAPI@getAirlinesByWorthAndOrdered');
Route::post('/airlines', 'AirlineControllerAPI@createAirline');
Route::put('/airlines/{id}', 'AirlineControllerAPI@updateAirline');
Route::delete('/airlines/{id}', 'AirlineControllerAPI@deleteAirline');
Route::post('/airlines/withpilot', 'AirlineControllerAPI@createAirlineWithPilot');

Route::post('/pilots', 'PilotControllerAPI@createPilot');
Route::put('/pilots/dissociate/{id}', 'PilotControllerAPI@dissociatePilotFromAirline');
Route::put('/pilots/associate/{pilot_id}/{airline_id}', 'PilotControllerAPI@associatePilotToAirline');
Route::put('/pilots/attach/{pilot_id}/{flight_id}', 'PilotControllerAPI@attachPilotToFlight');
Route::put('/pilots/detach/{pilot_id}/{flight_id}', 'PilotControllerAPI@detachPilotFromFlight');