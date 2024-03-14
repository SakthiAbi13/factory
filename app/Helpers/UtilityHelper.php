<?php

namespace App\Helpers;

use Illuminate\Http\Request;



use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Config;


// use Collective\Html\FormFacade\Form;

class UtilityHelper {

public static function validateToken($data, $page)
    {

        $validator = Validator::make(['auth_token' => $data['auth_token']], [
            'auth_token' => 'required'
        ]);
        if ($validator->fails()) {
            return ResponseHelper::failed($validator->errors(), 422, $validator->errors()->first());
        }
        $parameter = config('validation.secret_key') . $page;
        $isAuthToken = UtilityHelper::validateAuthToken($parameter, $data['auth_token']);

        return $isAuthToken;
    }


    public static function validateAuthToken($parameters = null, $authtoken = '') : bool
    {


        if (md5($parameters) == $authtoken) {
            return TRUE;
        } else {
            return FALSE;
        }
    }
}
