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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('/hel', 'ClassroomController@getAllUniversities');
//Route::get('/hel', 'ClassroomController@hello');



Route::get('/hel', 'DepartmentController@hello');
Route::get('/department', 'DepartmentController@getAllDepartments');
Route::get('/department/{id}', 'DepartmentController@getAirlineByID');
Route::get('/department/byworth/{worth}', 'DepartmentController@getAirlinesByWorth');
Route::get('/department/byworth/{worth}/order/{order}', 'DepartmentController@getAirlinesByWorthAndOrdered');
Route::post('/department', 'DepartmentController@createAirline');
Route::put('/department/{id}', 'DepartmentController@updateAirline');
Route::delete('/department/{id}', 'DepartmentController@deleteAirline');
Route::post('/department/withpilot', 'DepartmentController@createAirlineWithPilot');

Route::post('/pilots', 'PilotControllerAPI@createPilot');
Route::put('/pilots/dissociate/{id}', 'PilotControllerAPI@dissociatePilotFromAirline');
Route::put('/pilots/associate/{pilot_id}/{airline_id}', 'PilotControllerAPI@associatePilotToAirline');
Route::put('/pilots/attach/{pilot_id}/{flight_id}', 'PilotControllerAPI@attachPilotToFlight');
Route::put('/pilots/detach/{pilot_id}/{flight_id}', 'PilotControllerAPI@detachPilotFromFlight');