<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class office extends Model
{

    public function university() {
        return $this->belongsTo('App\university');
    }
}
