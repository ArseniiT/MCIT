<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $table = 'flight';

    protected $fillable = [
        'name', 'departure_time', 'arrival_time'
    ];

    public function copilots(){
        return $this->belongsToMany('App\Pilot');
    }
}
