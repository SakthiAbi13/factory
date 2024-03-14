<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Traits\CommonTraits;

class BannerController extends Controller
{

 // use App\Http\Traits\CommonTraits;
      use CommonTraits;

      public $route = "banners";
      public $views = "banners";
      public $title = "Banner";

      public function index(){
          $title=$this->title;
          $route = $this->route;
          return view($this->views.'.index',compact('title','route'));
      }

      public function create()
       {
          $title='Add '.$this->title;
          $route = $this->route;

          $months = $this->getMonthsData();

           return view($this->views.'.form',compact('title','route','months'));
       }

       public function Banner()
       {
          $title=$this->title;
          $route = $this->route;

           return view($this->views.'.Banner',compact('title','route'));
       }

       /**
        * Store a newly created resource in storage.
        *
        * @param  \Illuminate\Http\Request  $request
        * @return \Illuminate\Http\Response
        */
       public function store(Request $request)
       {


          $this->validate($request, [
              'title' => 'required',
              'gallery[]' => 'required|mimes:jpeg,jpg,png|max:2048',
              'description' => 'required',
            //   'client_logo[]'=> 'required|mimes:jpeg,jpg,png|max:2048',
            	// club_name	date	location	budget	chairman	secretary	description


          ]);
          $data = array();
          $data = $request->except(['gallery']);
        // $data= $request->all();

        //   /******************** Banner Image Logo *****************/
        //   $image = $request->file('image');
        //   $filename = time() . '_'.rand(99,10000) . '.'. $image->getClientOriginalExtension();
        //   $image->move(public_path('Banner/images'),$filename);
        //   $data['image'] = $filename;
        //   /***************************** Banner Image Logo End **************/



          $save=$this->insertBannerData($data);


          /**************************** Images************************ */
          $id = $save->id;
          $data = array();
          $gallery = $request->file('gallery');

            if (!empty($gallery)) {
                foreach ($gallery as $logo) {
                    $data = array();
                    $filename = time().'_'.rand(1,1000) . '.' . $logo->getClientOriginalExtension();

                    $logo->move(public_path('banner/images/gallery'),$filename);
                    $data['banner_id'] = $id;
                    $data['images'] = $filename;

                    if(!empty($logo)){
                        $client_logo = $this->insertImageData($data);
                    }

                }
            }

            /**************************** Images End*************************/

            /********************* Videos ***********************/
            $url =array();
            $url= $request->url;

            if(!empty($url)){
                foreach($url as $u){
                    $data['banner_id'] = $id;
                    $data['url'] = $u;
                    if(!empty($u)){

                        $videos = $this->insertVideoData($data);
                    }
                }
            }

            /*************************Videos End ******************** */


          return redirect($this->route)->with('success', 'New '.$this->title.' Added  Successfully');



       }

       public function view(Request $request,$id=null){
          $id = $request->id;
          $title=$this->title;
          $route = $this->route;
          $data = $this->getBannerData(['id'=>$id]);

          return view($this->views.'.view',compact('title','route','data'));
       }

       public function gallery(Request $request){
        $id = $request->id;
        $client_logo = $this->getImageData(['id'=>$id]);
        $image_path = $client_logo->images;
        $fullPath = public_path('banner/images/gallery/'.$image_path); // Get the full path to the image file

        // if (file_exists($fullPath)) { unlink($fullPath); }
        // $client_logo->delete();

        return response()->json(['data'=>'Image Deleted Successfully']);

       }

       public function utube(Request $request){
            $id = $request->id;
            $videos = $this->getVideoData(['id'=>$id]);
            // $videos->delete();
            return response()->json(['data'=>'Video Deleted Successfully']);
       }


      /**
       * Show the form for editing the specified resource.
       *
       * @param  int  $id
       * @return \Illuminate\Http\Response
       */
      public function edit(Request $request,$id=null)
      {
          // $id = $request->id;

          $title = $this->title;
          $route = $this->route;
          $data = $this->getBannerData(['id'=>$id]);
        //   $categories = $this->getCategoryData();
          $client_logo = $data->clientLogo;
          $months = $this->getMonthsData();
          return view($this->views.'.form',compact('title','data','route','client_logo','months'));
      }

      /**
       * Update the specified resource in storage.
       *
       * @param  \Illuminate\Http\Request  $request
       * @param  int  $id
       * @return \Illuminate\Http\Response
       */
      public function update(Request $request, $id)
      {
          $this->validate($request, [
            'title' => 'required',
            // 'image' => 'required|mimes:jpeg,jpg,png|max:2048',

            'description' => 'required',
          ]);

             $data = array();
             $data = $request->except(['_token','gallery','url']);


            /******************** Banner Image Logo *****************/
          // if($request->file('image')){
          //   $this->validate($request,[
          //       'image' => 'mimes:jpeg,jpg,png|max:2048',
          //   ]);
          //   $company_logo = $request->file('image');
          //   $filename = time() . '_'.rand(99,10000) . '.'. $company_logo->getClientOriginalExtension();
          //   $company_logo->move(public_path('Banner/images'),$filename);
          //   $data['image'] = $filename;
          // }

          /***************************** Banner Image Logo End **************/







              $save=$this->updateBannerData($data,$request->id);
            /**************************** Images************************ */

            if($request->file('gallery')){
                $this->validate($request,[
                    'gallery[]' => 'mimes:jpeg,jpg,png|max:2048'
                ]);
                $data = array();
                $client_logo = $request->file('gallery');

                    if (!empty($client_logo)) {
                        foreach ($client_logo as $logo) {
                            $data = array();
                            $filename = time() . '_'.rand(99,10000) . '.'. $logo->getClientOriginalExtension();
                            $logo->move(public_path('banner/images/gallery'),$filename);
                            $data['banner_id'] = $id;
                            $data['images'] = $filename;
                            if(!empty($logo)){
                                $client_logo = $this->insertImageData($data);
                            }


                        }
                    }
            }




            /**************************** Images End*************************/

              /********************* Videos ***********************/
              $url =array();
              $urls= $request->url;
            //   if (!is_null($urls) && count(array_filter($urls)) > 0) {
            //     echo 'working';
            //   }else{
            //     var_dump($urls);
            //   }

            //     exit();
                if (!is_null($urls) && count(array_filter($urls)) > 0) {
                  foreach($urls as $u){
                      $data['banner_id'] = $id;
                      $data['url'] = $u;
                      if(!empty($u)){

                        $videos = $this->insertVideoData($data);
                    }
                  }
              }

              /*************************Videos End ******************** */

              return redirect($this->route)->with('success',$this->title.' Updated Successfully');

      }

      /**
       * Remove the specified resource from storage.
       *
       * @param  int  $id
       * @return \Illuminate\Http\Response
       */
      public function delete(Request $request)
      {
          $id = $request->id;
          $data = $this->getBannerData(['id'=>$id]);

          $videos = $this->getVideoData(['Banner_id'=>$id],'get');
          foreach($videos as $v){
            $v->delete();
          }

          /*********************** Banner Delete ****************/
          $client_logo = $this->getImageData(['banner_id'=>$id],'get');
          foreach($client_logo as $logo){
            $image_path = $logo->images;
            $fullPath = public_path('banner/images/gallery/'.$image_path); // Get the full path to the image file

            if (file_exists($fullPath)) { unlink($fullPath); }

            $logo->delete();
          }


          $data->delete();
        //   $data->is_active = 0;
        //   $data->save();
          return redirect($this->route)->with('success', $this->title.' deleted successfully');

      }
}
