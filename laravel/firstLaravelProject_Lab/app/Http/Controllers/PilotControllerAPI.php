<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pilot;
use App\Airline;
use App\Flight;

class PilotControllerAPI extends Controller
{
    public function createPilot(Request $request){
        $pilot = new Pilot($request->all());
        $airline = Airline::find($request['airline_id']);
        if($airline){
            $airline->pilots()->save($pilot);
        }
        
    }

    public function dissociatePilotFromAirline($id){
        $pilot = Pilot::find($id);

        if($pilot){
            $pilot->airline()->dissociate();
            $pilot->save();
        }
    }

    public function associatePilotToAirline($pilot_id, $airline_id){
        $pilot = Pilot::find($pilot_id);
        if($pilot){
            $airline = Airline::find($airline_id);
            if($airline){
                $pilot->airline()->associate($airline);
                $pilot->save();
                return "Pilot is associated with the Airline company";
            }
            return "The airline company is not found";
        }

        return "The pilot is not found";
    }

    public function attachPilotToFlight($pilot_id, $flight_id){
        $flight = Flight::find($flight_id);

        if($flight){
            $flight->copilots()->attach($pilot_id);
            return "Pilot and Flight attached";
        }
        return "The flight is not found";
    }

    public function detachPilotFromFlight($pilot_id, $flight_id){
        $flight = Flight::find($flight_id);

        if($flight){
            $flight->copilots()->detach($pilot_id);
            return "Pilot and Flight detached";
        }
        return "The flight is not found";
    }
}
