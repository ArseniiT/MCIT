<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class university extends Model
{
    protected $fillable = [
        'name'
    ];

    public function department() {
        return $this->hasMany('App\department');
    }

    public function classroom() {
        return $this->hasMany('App\classroom');
    }
}
