<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class department extends Model
{
    protected $fillable = [
        'name'
    ];

    public function university() {
        return $this->belongsTo('App\university');
    }

    public function professors() {
        return $this->hasMany('App\professor');
    }
}
