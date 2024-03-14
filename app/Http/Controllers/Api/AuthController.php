<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\MessageBag;
use App\Models\Admin;
use Session;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\CommonTraits;
use App\Helpers\ResponseHelper;
use App\Helpers\UtilityHelper;
use Illuminate\Http\Response;
use Carbon\Carbon;

class AuthController extends Controller
{

    public function index(){

        return view('admin.dashboard',[
            'title'=>' | Home'
        ]);
    }
    public function login(){
        return view('admin.login',[
            'title'=>' | Login'
        ]);
    }



    public function authenticate(Request $request){
        $data = json_decode($request->getContent(),true);
        $validator = Validator::make($data,
            [
                'email'=>'required|email',
                'password'=>'required'
            ]
        );

        if($validator->fails()){
            return ResponseHelper::failed($validator->errors(), 422, $validator->errors()->first());
        }

        $email=$data['email'];
        $password=$data['password'];
        $credentials = [
            'email' => $email,
            'password' => $password,
        ];

        if (Auth::guard('admin')->attempt($credentials)) {
            $user=Admin::select('id','username')->where('email',$email)->first();
            return ResponseHelper::success('Login SuccessFully',$user,200);
            Session::put('user', $user);
            return redirect('dashboard');
        }else{
            return ResponseHelper::failed(false, '422', 'Whoops..! Authentication Failed.');
            return back()->withErrors('Invalid Credentials');
        }

        $isAuthToken = UtilityHelper::validateToken($data, 'employee');

        if (!$isAuthToken) {
            return ResponseHelper::failed(false, '422', 'Whoops..! Authentication Failed.');
        }





    }

    public function logout(){
        Auth::logout();
        return redirect('admin/login');
    }


    public function dashboard(Request $request){
        return view('admin.dashboard');
    }


}
