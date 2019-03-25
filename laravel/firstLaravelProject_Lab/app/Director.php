<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    protected $table = 'director';

    protected $fillable = [
        'name', 'airport_id'
    ];

    public function airport(){
        return $this->belongsTo('App\Airport');
    }
}
