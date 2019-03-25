<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pilot extends Model
{
    protected $table = 'pilot';

    protected $fillable = [
        'name', 'experience', 'airline_id'
    ];

    public function airline(){
        return $this->belongsTo('App\Airline');
    }

    public function flights(){
        return $this->belongsToMany('App\Flight');
    }
}
