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
Route::get('/department/{id}', 'DepartmentController@getDepartmentByID');
Route::get('/department/byworth/{worth}', 'DepartmentController@getDepartmentsByWorth');
Route::get('/department/byworth/{worth}/order/{order}', 'DepartmentController@getDepartmentsByWorthAndOrdered');
Route::post('/department', 'DepartmentController@createDepartment');
Route::put('/department/{id}', 'DepartmentController@updateDepartment');
Route::delete('/department/{id}', 'DepartmentController@deleteDepartment');
Route::post('/department/withprofessor', 'DepartmentController@createDepartmentWithProfessor');

Route::post('/professors', 'PilotControllerAPI@createPilot');
Route::put('/professors/dissociate/{id}', 'PilotControllerAPI@dissociatePilotFromAirline');
Route::put('/professors/associate/{professor_id}/{airline_id}', 'PilotControllerAPI@associatePilotToAirline');
Route::put('/professors/attach/{professor_id}/{flight_id}', 'PilotControllerAPI@attachPilotToFlight');
Route::put('/professors/detach/{professor_id}/{flight_id}', 'PilotControllerAPI@detachPilotFromFlight');