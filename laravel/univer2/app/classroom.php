<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class classroom extends Model
{
    protected $fillable = [
        'seat'
    ];

    public function university() {
        return $this->belongsTo('App\university');
    }
}
