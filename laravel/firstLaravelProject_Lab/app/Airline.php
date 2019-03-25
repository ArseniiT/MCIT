<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Airline extends Model
{
    protected $table = "airline";

    protected $fillable = [
        'name', 'worth'
    ];

    public function pilots(){
        return $this->hasMany('App\Pilot');
    }
}
