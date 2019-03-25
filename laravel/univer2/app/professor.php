<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class professor extends Model
{

    protected $fillable = [
        'rank'
    ];

    public function department() {
        return $this->belongsTo('App\department');
    }

    public function person() {
        return $this->belongsTo('App\person');
    }
}
