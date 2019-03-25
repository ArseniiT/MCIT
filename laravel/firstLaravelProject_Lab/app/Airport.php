<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Airport extends Model
{
    protected $table = 'airport';

    protected $fillable = [
        'name', 'code'
    ];

    public function director(){
        return $this->hasOne('App\Director');
    }
}
