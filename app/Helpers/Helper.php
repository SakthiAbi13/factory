<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
// use Illuminate\Http\Response;
use Embed\Embed;
// use Illuminate\Support\Facades\Config;

// use Cohensive\Embed\Facades\Embed;
// use Collective\Html\FormFacade\Form;

class Helper {

    public static function utubeUrl($data){
        $embed = Embed::make($this->video)->parseUrl();

        if (!$embed)
            return '';

        $embed->setAttribute(['width' => 400]);
        return $embed->getHtml();
    }


	public static function validateAuthToken($parameters = null, $authtoken = '') : bool
    {


        if (md5($parameters) == $authtoken) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

	public static function paginate($items, $perPage, $page = null, $options = [])
    {
		$page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
		$items = $items instanceof Collection ? $items : Collection::make($items);
		if($page > 1){
			$data = new LengthAwarePaginator(array($items->forPage($page, $perPage)), $items->count(), $perPage, $page, $options);
		}else{
			$data = new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
		}
		return $data;
	}


	public static function getResponse($response = []) {

		$status = !empty($response['status']) ? $response['status'] : 200 ;
		$title = !empty($response['title']) ? $response['title'] : self::getStatus($status) ;
		$message = !empty($response['message']) ? $response['message'] : '' ;
		$responseData = !empty($response['data']) ? $response['data'] : [] ;
		$error = !empty($response['error']) ? $response['error'] : [] ;



		return response()->json(['statusCode' => (string) $status, 'title' => $title, 'message' => $message, 'responseData' => $responseData, 'error' => $error], $status);
	}


	public static function getStatus($code) {

		switch ($code) {
			case 200:
				return "OK";
				break;

			case 201:
				return "Created";
				break;

			case 204:
				return "No Content";
				break;

			case 301:
				return "Moved Permanently";
				break;

			case 400:
				return "Bad Request";
				break;

			case 401:
				return "Unauthorized";
				break;

			case 403:
				return "Forbidden";
				break;

			case 404:
				return "Not Found";
				break;

			case 405:
				return "Method Not Allowed";
				break;

			case 422:
				return "Unprocessable Entity";
				break;

			case 500:
				return "Internal Server Error";
				break;

			case 502:
				return "Bad Gateway";
				break;

			case 503:
				return "Service Unavailable";
				break;
		}
	}


	public static function form_shortcut($form_type=null,$field=null,$data=null){
		// $form_type=null,$field=null
		$var1 = $field;
		$var2= !empty($data->$var1)?$data->var1:'';
		$var3 = explode( '_' , $var1);$var4 = implode( ' ',$var3); $var3 =ucwords($var4);
		// $text = 'Form';
		// $form =  $text."::".$form_type."(".$var1.",". $var2.", ['rows'=>3 ,'class' => 'form-control', 'placeholder' => ". $var3."])";
		// $form =  $text."::".$form_type."(".$var1.",". $var2.")";
		// $form = "<input type='".$form_type."' name='".$var1."' value='".$var2."'>";
		$result = array();
		$result['var1']=$var1;
		$result['var2']=$var2;
		$result['var3']=$var3;
		return  $result;

		// return "Working";
	}

	public static function getJSONFromDBString($input){
        //$input = str_replace("{","{\"",$input);
        //$input = str_replace("}","\"}",$input);
        //$input = str_replace(":","\":\"",$input);
        // $input = str_replace(",","\",\"",$input);
        // $input = str_replace("_"," ",$input);

        $colonpieces = explode(":",substr(substr($input,1),0,-1));
        $jsonitems = array();
        $i=0;
        $k = "";
        $v = "";
        foreach ($colonpieces as $colonitem) {
             if($i==0){
                $k = $colonitem;
             }else{
                $commapieces = explode(",",$colonitem);
                $newk = array_pop($commapieces);
                $v = implode(",",$commapieces);
                $jsonitems[$k] = $v;
                $k = $newk;
             }
             $i++;
        }
        $input = "{";
        $j=0;
        foreach($jsonitems as $k => $v){
            if($j==0){
                $input = $input."\"".$k."\":\"".$v."\"";
            }else{
                $input = $input.",\"".$k."\":\"".$v."\"";
            }
            $j++;
        }
        $input .= "}";

        $input = preg_replace_callback('/([\x{0000}-\x{0008}]|[\x{000b}-\x{000c}]|[\x{000E}-\x{001F}])/u', function($sub_match){return '\u00' . dechex(ord($sub_match[1]));},$input);
        return $input;
    }

	public static function dbsafeString($a){
        $a = str_replace('"', '', $a);
        $a = str_replace("'", "", $a);
        $a = trim($a);
        return $a;
    }
}
