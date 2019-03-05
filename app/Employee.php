<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['name', 'lastname', 'specialization', 'company', 'city', 'gender', 'rating' , 'like'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
