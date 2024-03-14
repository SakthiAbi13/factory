<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
// use App\Models\admin\Role;

class Admin extends Authenticatable
{
    use HasFactory;

    protected $fillable = [ 'id', 'name' , 'username' , 'email' , 'password' , 'role_id' , 'status' , 'is_active','created_by' , 'updated_by' ];

    // public function roles(){
    //     return $this->hasMany(Role::class,'id','role_id');
    // }

    public static function getData($where=array(), $get = 'first') {
        if(!empty($where)) {
            return Admin::where($where)->$get();
        } else {
            return Admin::all();
        }
    }

    public static function insertData($data){
        if(!empty($data)){
            return Admin::create($data);
            // updateOrCreate
        }
    }

    public static function updateData($data,$id){
        if(!empty($data)&&!empty($id)){

            return Admin::where('id',$id)->update($data);
        }
    }
}
