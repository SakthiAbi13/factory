<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\DB;
use App\Helpers\Helper;

use Carbon\Carbon;

use App\Models\Banner;
use App\Models\Video;
use App\Models\Types;

use App\Models\EventTicker;
use App\Models\Month;
use App\Models\Team;
use App\Models\Event;


trait AjaxDataTrait
{


    protected function handle_dashboard_data($request): array
    {
        $pd = Banner::where('is_active',1)->count();


        $val = [
            'banner' => $pd,

        ];

        return $val;

    }

    // event_ticker_status
    protected function handle_event_ticker_rank_status($request): array
    {
        $id = $request->id;
        $new_rank = $request->status;

        $pd='';
        $item = EventTicker::find($id);

        // Get all items with the same is_active status
        // $items = EventTicker::where('is_active', 1)->get();

        // // Check if the new rank already exists in the list
        // $existing_item = $items->first(function ($item) use ($new_rank) {
        //     return $item->rank == $new_rank;
        // });

        // if ($existing_item) {
        //     // The new rank already exists, so we need to move the existing item
        //     // to the next available rank
        //     $next_rank = $new_rank + 1;
        //     while ($items->contains('rank', $next_rank)) {
        //         $next_rank++;
        //     }

        //     // Update the rank of the existing item
        //     $existing_item->rank = $next_rank;
        //     $existing_item->save();
        // }

        // Update the rank of the item to the new rank
        $item->rank = $new_rank;
        $item->save();

        // $datas = EventTicker::where('is_active',1)->get();
        // foreach($datas as $d){
        //     if($d->rank == $rank){
        //         $pd= $d->id;
        //         $et = EventTicker::find($id);
        //         $et->rank = $rank;
        //         $et->save();
        //     }
        // }
        // // $ch = EventTicker::find($id);

        // $datas = EventTicker::select('rank')->where('is_active',1)->get();
        // $ranks=array();  $result='';
        // foreach($datas as $d){
        //     $ranks[] = $d->rank;
        // }
        // $solo = array_diff(range(1, 4),$ranks);



        // $ch = EventTicker::find($pd);


        // $result = reset($solo);

        // $ch->rank = $result ?: '';
        // $ch->save();

        $val = [
            'data' => 'success',

        ];

        return $val;

    }


    protected function handle_rank_status($request): array
    {
        $id = $request->id;
        $new_rank = $request->status;
        $table = $request->table;

        $pd='';
        $item = Month::find($id);


        $item->rank = $new_rank;
        $item->save();



        $val = [
            'data' => 'success',

        ];

        return $val;

    }
    /*------------------------ Event ticker status------------------------------------*/
    protected function handle_event_ticker_status($request): array
    {

        $id = $request->id;
        $is_active = $request->status;
        $ch = EventTicker::find($id);
        $ch->is_active = $is_active;
        $ch->save();

        $val = [ 'status' => 'success'];
        return $val;
    }

    /*------------------------ Event ticker status------------------------------------*/
    protected function handle_status_data($request): array
    {

        $id = $request->id;
        $is_active = $request->status;
        $table = $request->table;

            $model = DB::table($table)
                        ->where('id',$id)
                        ->update(['is_active'=>$is_active]);
        // $ch = EventTicker::find($id);
        // $ch->is_active = $is_active;
        // $ch->save();

        $val = [ 'status' => 'success'];
        return $val;
    }



    /*------------------------ banner ------------------------- */
    protected function handle_banner_data($request): array
    {

            $table = 'banners';
            $datum = Banner::whereIn('is_active',[1,0]);



                // title	club_name	date	location	budget	chairman	secretary	description	is_active	created_at	updated_at



         if($request->has('search_text') && $request->search_text != null) {
            $datum
            ->where('title','LIKE','%'.$request->search_text.'%')
            ->OrWhere('club_name','LIKE','%'.$request->search_text.'%')
            // ->orWhere('date','LIKE','%'.$request->search_text.'%')
            // ->orWhere('location','LIKE','%'.$request->search_text.'%')
            // ->orWhere('budget','LIKE','%'.$request->search_text.'%')
            ->orWhere('chairman','LIKE','%'.$request->search_text.'%')
            ->orWhere('secretary','LIKE','%'.$request->search_text.'%');
            // ->orWhere('description','LIKE','%'.$request->search_text.'%');


        }

        if($request->has('order_by')) {
            $datum->orderBy($request->order_by, $request->order_direction);
        }else{
            $datum->orderBy($table.'.created_at','desc');
        }

        // if($request->has('page') && $request->page == 'all') {
        //     $data = $datum->get();
        // } else {
        //     $data = $datum->paginate(10);
        // }

        if($request->has('page') && $request->page == 'all') {
            $data = $datum->get();
        } else {
            if($request->length != '-1'){
            $data = $datum->paginate($request->length);
            }
            elseif($request->length=='-1'){
            $count = $datum->where($table.'.is_active',1)->count($table.'.id');
            // ->where('sma_undata_countries.status','=','1');
            $data = $datum->paginate($count);
            }else{
                $data = $datum->paginate(100);
            }
        }

        return array(
            'success' => true,
            'data' =>  $data
        );
    }

    /*------------------------ video ------------------------- */
    protected function handle_video_data($request): array
    {

            $table = 'video';
            $specfic_path= ($request->specfic_path);
            if($specfic_path == 'video'){
                $datum = Video::where(['type'=>'VIDEO','is_active'=>1]);
            }elseif($specfic_path == 'shorts'){
                $datum = Video::where(['type'=>'SHORTS','is_active'=>1]);
            }else{
                $datum = Video::where('is_active',1);
            }


                //  id	name	url	description	type	is_active	created_at	updated_at
         if($request->has('search_text') && $request->search_text != null) {
            $datum
            ->where('name','LIKE','%'.$request->search_text.'%')
            ->orWhere('url','LIKE','%'.$request->search_text.'%')
            ->orWhere('description','LIKE','%'.$request->search_text.'%')
            ->orWhere('type','LIKE','%'.$request->search_text.'%');
            // ->orWhere('created_at','LIKE','%'.$request->search_text.'%');


        }

        if($request->has('order_by')) {
            $datum->orderBy($request->order_by, $request->order_direction);
        }else{
            $datum->orderBy('created_at','desc');
        }



        if($request->has('page') && $request->page == 'all') {
            $data = $datum->get();
        } else {
            if($request->length != '-1'){
            $data = $datum->paginate($request->length);
            }
            elseif($request->length=='-1'){
            $count = $datum->where($table.'.is_active',1)->count($table.'.id');

            $data = $datum->paginate($count);
            }else{
                $data = $datum->paginate(100);
            }
        }

        return array(
            'success' => true,
            'data' =>  $data
        );
    }



     /*------------------------ EventTicker ------------------------- */
     protected function handle_event_ticker_data($request): array
     {

             $table = 'event_tickers';

             $datum = EventTicker::whereIn('is_active', [0, 1]);



                 // url	text	rank	is_active	created_at	updated_at

          if($request->has('search_text') && $request->search_text != null) {
             $datum
             ->where('text','LIKE','%'.$request->search_text.'%')
             ->orWhere('url','LIKE','%'.$request->search_text.'%')
             ->orWhere('rank',$request->search_text);


         }

        //  $datum->orderByRaw('CAST(rank AS UNSIGNED) ASC');
        // $datum->orderBy(DB::raw('CONVERT(rank, UNSIGNED INTEGER)'), 'asc');
        $datum->orderBy('rank','asc');

         if($request->has('order_by')) {
             $datum->orderBy($request->order_by, $request->order_direction);
         }





         if($request->has('page') && $request->page == 'all') {
             $data = $datum->get();
         } else {
             if($request->length != '-1'){
             $data = $datum->paginate($request->length);
             }
             elseif($request->length=='-1'){
             $count = $datum->where($table.'.is_active',1)->count($table.'.id');

             $data = $datum->paginate($count);
             }else{
                 $data = $datum->paginate(100);
             }
         }

         return array(
             'success' => true,
             'data' =>  $data
         );
     }

     /*------------------------ Project Types ------------------------- */
     protected function handle_project_types_data($request): array
     {

             $table = 'types';

             $datum = Types::whereIn('is_active', [0, 1]);



                 // url	text	rank	is_active	created_at	updated_at

          if($request->has('search_text') && $request->search_text != null) {
             $datum
             ->where('name','LIKE','%'.$request->search_text.'%');
            //  ->orWhere('url','LIKE','%'.$request->search_text.'%')
            //  ->orWhere('rank',$request->search_text);


         }

        //  $datum->orderByRaw('CAST(rank AS UNSIGNED) ASC');
        // $datum->orderBy(DB::raw('CONVERT(rank, UNSIGNED INTEGER)'), 'asc');
        $datum->orderBy('created_at','asc');

         if($request->has('order_by')) {
             $datum->orderBy($request->order_by, $request->order_direction);
         }





         if($request->has('page') && $request->page == 'all') {
             $data = $datum->get();
         } else {
             if($request->length != '-1'){
             $data = $datum->paginate($request->length);
             }
             elseif($request->length=='-1'){
             $count = $datum->where($table.'.is_active',1)->count($table.'.id');

             $data = $datum->paginate($count);
             }else{
                 $data = $datum->paginate(100);
             }
         }

         return array(
             'success' => true,
             'data' =>  $data
         );
     }

       /*------------------------ Months Data ------------------------- */
       protected function handle_months_data($request): array
       {

               $table = 'months';

               $datum = Month::whereIn('is_active', [0, 1]);



                   // url	text	rank	is_active	created_at	updated_at

            if($request->has('search_text') && $request->search_text != null) {
               $datum
               ->where('name','LIKE','%'.$request->search_text.'%')
              //  ->orWhere('url','LIKE','%'.$request->search_text.'%')
               ->orWhere('rank',$request->search_text);


           }

          //  $datum->orderByRaw('CAST(rank AS UNSIGNED) ASC');
          // $datum->orderBy(DB::raw('CONVERT(rank, UNSIGNED INTEGER)'), 'asc');
          $datum->orderBy('rank','asc');

           if($request->has('order_by')) {
               $datum->orderBy($request->order_by, $request->order_direction);
           }





           if($request->has('page') && $request->page == 'all') {
               $data = $datum->get();
           } else {
               if($request->length != '-1'){
               $data = $datum->paginate($request->length);
               }
               elseif($request->length=='-1'){
               $count = $datum->where($table.'.is_active',1)->count($table.'.id');

               $data = $datum->paginate($count);
               }else{
                   $data = $datum->paginate(100);
               }
           }

           return array(
               'success' => true,
               'data' =>  $data
           );
       }

        /*------------------------ Teams Data ------------------------- */
        protected function handle_teams_data($request): array
        {

                $table = 'teams';

                $datum = Team::whereIn('is_active', [0, 1]);



                    // url	text	rank	is_active	created_at	updated_at

             if($request->has('search_text') && $request->search_text != null) {
                $datum
                ->where('name','LIKE','%'.$request->search_text.'%')
                ->orWhere('url','LIKE','%'.$request->search_text.'%')
                ->orWhere('designation','LIKE','%'.$request->search_text.'%')
                ->orWhere('club_name','LIKE','%'.$request->search_text.'%')
                ->orWhere('types','LIKE','%'.$request->search_text.'%')
                ->orWhere('mobile','LIKE','%'.$request->search_text.'%');
                // ->orWhere('mobile',$request->search_text);


            }

           //  $datum->orderByRaw('CAST(rank AS UNSIGNED) ASC');
           // $datum->orderBy(DB::raw('CONVERT(rank, UNSIGNED INTEGER)'), 'asc');
           $datum->orderBy('created_at','desc');

            if($request->has('order_by')) {
                $datum->orderBy($request->order_by, $request->order_direction);
            }





            if($request->has('page') && $request->page == 'all') {
                $data = $datum->get();
            } else {
                if($request->length != '-1'){
                $data = $datum->paginate($request->length);
                }
                elseif($request->length=='-1'){
                $count = $datum->where($table.'.is_active',1)->count($table.'.id');

                $data = $datum->paginate($count);
                }else{
                    $data = $datum->paginate(100);
                }
            }

            return array(
                'success' => true,
                'data' =>  $data
            );
        }

          /*------------------------ Event Data ------------------------- */
          protected function handle_events_data($request): array
          {

                  $table = 'events';

                  $datum = Event::whereIn('is_active', [0, 1]);



                      // url	text	rank	is_active	created_at	updated_at

               if($request->has('search_text') && $request->search_text != null) {
                  $datum
                  ->where('name','LIKE','%'.$request->search_text.'%')
                 //  ->orWhere('url','LIKE','%'.$request->search_text.'%')
                  ->orWhere('rank',$request->search_text);


              }

             //  $datum->orderByRaw('CAST(rank AS UNSIGNED) ASC');
             // $datum->orderBy(DB::raw('CONVERT(rank, UNSIGNED INTEGER)'), 'asc');
             $datum->orderBy('created_at','desc');

              if($request->has('order_by')) {
                  $datum->orderBy($request->order_by, $request->order_direction);
              }





              if($request->has('page') && $request->page == 'all') {
                  $data = $datum->get();
              } else {
                  if($request->length != '-1'){
                  $data = $datum->paginate($request->length);
                  }
                  elseif($request->length=='-1'){
                  $count = $datum->where($table.'.is_active',1)->count($table.'.id');

                  $data = $datum->paginate($count);
                  }else{
                      $data = $datum->paginate(100);
                  }
              }

              return array(
                  'success' => true,
                  'data' =>  $data
              );
          }

    }
