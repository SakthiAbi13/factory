<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [ 'name' ,	'created_by' ,	'updated_by' , 	'status' ,'is_active'];

    

    public static function getData($where=array(), $get = 'first') {
        if(!empty($where)) {
            return Role::where($where)->$get();
        } else {
            return Role::all();
        }
    }

    public static function insertData($data){
        if(!empty($data)){
            return Role::create($data);
        }
    }

    public static function updateData($data,$id){
        if(!empty($data)&&!empty($id)){

            return Role::where('id',$id)->update($data);
        }
    }
}
