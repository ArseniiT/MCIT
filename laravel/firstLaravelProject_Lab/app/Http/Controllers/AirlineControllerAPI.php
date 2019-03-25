<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Airline;
use App\Pilot;

class AirlineControllerAPI extends Controller
{
    public function hello(){
        $a = 2 +10;
        return $a;
    }

    public function getAllAirlines(){
        //return 'this is the list of all airlines';

        $airlines = Airline::with('pilots')->get();
        return $airlines;
    }

    public function getAirlineByID($id){
        //$airline = Airline::find($id);
        $airline = Airline::with('pilots')->find($id);
        if($airline)
            return $airline;
        return "No Airline found with this ID";

    }

    public function getAirlinesByWorth($worth){
       // $airlines = Airline::where('worth', $worth)->get();
       $airlines = Airline::where('worth', '>=', $worth)->get();
        if($airlines && count($airlines)>0)
            return $airlines;
        return "No Airline found with this condition";
    }

    public function getAirlinesByWorthAndOrdered($worth, $order){
        $airlines = Airline::where('worth', '>=', $worth)
        ->orderBy('worth', $order)
        ->get();
        if($airlines && count($airlines)>0)
            return $airlines;
        return "No Airline found with this conditions";
    }

    public function createAirline(Request $request){
       // Airline::create($request->all());
       $airline = new Airline($request->all());
       $airline->worth += 10;
       $airline->save();
    }

    public function updateAirline(Request $request, $id){
           // Airline::find($id)->update($request->all());
           $airline = Airline::find($id);
           $airline->fill($request->all());
           $airline->save();
    }

    public function deleteAirline($id){
        $airline = Airline::find($id);
        if($airline){
            $airline->delete();
            return "Airline Deleted";
        }
        return "No Airline to Delete";
    }

    public function createAirlineWithPilot(Request $request){
        $airline = new Airline(['name' => $request['airline_name'],
        'worth' => $request['worth']]);
        $airline->save();

        $airline->pilots()->save(new Pilot(['name' => $request['pilot_name'],
        'experience' => $request['experience']]));

    }

    
}
