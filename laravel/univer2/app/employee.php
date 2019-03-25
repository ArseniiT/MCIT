<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{

    public function office() {
        return $this->belongsTo('App\office');
    }

    public function person() {
        return $this->belongsTo('App\person');
    }
}
