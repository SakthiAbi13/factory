<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\CommonTraits;
use App\Helpers\ResponseHelper;
use App\Helpers\UtilityHelper;
use Illuminate\Http\Response;
use Carbon\Carbon;

class EmployeeController extends Controller
{
    use CommonTraits;
    // use App\Http\Traits\CommonTraits;
    public function index(Request $request){
        $data = json_decode($request->getContent(),true);
        $validator = Validator::make($data,
            [
                'auth_token' =>'required',
            ]
        );

        if($validator->fails()){
            return ResponseHelper::failed($validator->errors(), 422, $validator->errors()->first());
        }


        $isAuthToken = UtilityHelper::validateToken($data, 'employee');

        if (!$isAuthToken) {
            return ResponseHelper::failed(false, '422', 'Whoops..! Authentication Failed.');
        }





          $result = $this->getEmployeeData();



          $response["status"] = true;
          $response["code"] = 200;
          $response["message"] = 'Employees Datas';
          foreach($result as $r){


              $val[] =
                  [
                    //name,username,email,password,address,is_active


                      'id' => $r->id,
                      'email' => $r->email,
                      'username' => $r->username,
                      'password' => $r->password,
                      'address' => $r->address,
                      'is_active'   =>  $r->is_active,
                      'created_at'  => date('Y-m-d H:i:s',strtotime($r->created_at)),
                      'updated_at' => date('Y-m-d H:i:s',strtotime($r->updated_at))
                  ] ;
          }
          $response['data'] = $val;
          return new Response($response);

    }

    public function view(Request $request,$id){

        $data = json_decode($request->getContent(),true);
        $validator = Validator::make($data,[
            "auth_token" => 'required',

        ]);

        if($validator->fails()){
            return ResponseHelper::failed($validator->errors(), 422, $validator->errors()->first());
        }


        $isAuthToken = UtilityHelper::validateToken($data, 'employee');



        if (!$isAuthToken) {
            return ResponseHelper::failed(false, '422', 'Whoops..! Authentication Failed.');
        }







          $count = 0 ;

          $result = $this->getEmployeeData(['id'=>$id]);

          if(!$result){
            return ResponseHelper::failed(false, '404', 'Whoops..! No Data Found. for this id '.$id);
          }


        //   if(!empty($r)){
        //       $count = $r->count();
        //   }

        //   if ($count > 0) {

        //     return ResponseHelper::failed(false, '404', 'Whoops..! No Data Found. for this id '.$id);
        //   }

          $response["status"] = true;
          $response["code"] = 200;
          $response["message"] = 'Employee Data for id '.$id;



            $val[] = [
                   //name,username,email,password,address,is_active
                   'id' => $result->id,
                   'email' => $result->email,
                   'username' => $result->username,
                   'password' => $result->password,
                   'address' => $result->address,
                   'is_active'   =>  $result->is_active,
                   'created_at'  => date('Y-m-d H:i:s',strtotime($result->created_at)),
                   'updated_at' => date('Y-m-d H:i:s',strtotime($result->updated_at))
            ];


          $response['data'] = $val;
          return new Response($response);
    }


    public function create(Request $request){
        $data = json_decode($request->getContent(),true);
        $validator = Validator::make($data,
            [
                'auth_token' =>'required',
                'datas' => 'required'
            ]
        );

        if($validator->fails()){
            return ResponseHelper::failed($validator->errors(), 422, $validator->errors()->first());
        }


        $isAuthToken = UtilityHelper::validateToken($data, 'employee');

        if (!$isAuthToken) {
            return ResponseHelper::failed(false, '422', 'Whoops..! Authentication Failed.');
        }





        //   $result = $this->getEmployeeData();



          $response["status"] = true;
          $response["code"] = 200;
          $response["message"] = 'Employees Datas';

          try {
            // Attempt to create a new user
            $val = $this->insertEmployeeData($data['datas']);
            // Additional logic...
        } catch (\Illuminate\Database\QueryException $e) {
            $errorCode = $e->errorInfo[1];
            $val = $e->getMessage;
        }

        //   $response['data'] = $data['datas'][1]['name'];
          //name,username,email,password,address,is_active
        //   return new Response($response);
        //   foreach($data as $d){
        //         $is_saved = false;
        //         $is_saved = $this->insertEmployeeData($d);
        //         if($is_saved){
        //             $val[] = $d['name'].' Saved Successfully';
        //         }else{
        //             $val[] = $d['name'].' Not Saved';
        //         }

        //   }
          $response['data'] = $val;
          return new Response($response);

    }
}
