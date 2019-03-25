<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class person extends Model
{
    public function professor() {
        return $this->hasOne('App\professor');
    }

    public function employee() {
        return $this->hasOne('App\employee');
    }
}
