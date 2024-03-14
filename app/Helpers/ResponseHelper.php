<?php
namespace App\Helpers;

class ResponseHelper
{
    public static function success($msg, $data = null, $httpCode = 200)
    {
        return response()->json([
            'message' => $msg,
            'data' => $data
        ], $httpCode);
    }

    public static function created($msg, $data = null,$httpCode = 201)
    {
        return self::success($msg,$data,201);
    }

    public static function validation($errors, $httpCode = 422)
    {
        return response()->json([
            'errors' => $errors,
        ], $httpCode);
    }

    public static function failed($errors, $httpCode = 400,$errorMessage = null)
    {
        return response()->json([
            'errors' => $errors,
            'error_message'=>$errorMessage
        ], $httpCode);
    }
}
