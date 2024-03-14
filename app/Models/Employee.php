<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Passport\HasApiTokens;
// use App\Models\EmployeeImage;

class Employee extends Model
{
    use HasFactory,HasApiTokens;

    //name,username,email,password,address,is_active
    protected $fillable = [ 'name'	,'username','password','address','email'	,'is_active'];



    // public function gallery():HasMany
    // {
    //     return $this->hasMany(EmployeeImage::class);
    // }

    // public function video():HasMany
    // {
    //     return $this->hasMany(Video::class);
    // }

    // public function month(): BelongsTo
    // {
    //     return $this->belongsTo(Month::class, 'month_id' ,'id');
    // }



        public static function getData($where=array(), $get = 'first') {
            // if(!empty($where)) {

            //     return Employee::where($where)->orderBy('date','asc')->$get();


            // } else {
            //     return Employee::orderBy('date', 'asc')->all();
            // }
            if(!empty($where)) {

                return Employee::where($where)->$get();
            } else {
                return Employee::all();
            }
        }

        public static function insertData($data){
            if(!empty($data)){
                return Employee::create($data);
            }
        }

        public static function updateData($data,$id){
            if(!empty($data)&&!empty($id)){

                return Employee::where('id',$id)->update($data);
            }
        }
}
