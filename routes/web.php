<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
// */

// Route::get('/', function () {
//     return view('welcome');
// });

use App\Http\Controllers\admin\AjaxController as Ajax;
use App\Http\Controllers\admin\AuthController as Auth;
use App\Http\Controllers\EventTickerController as EventTicker;
use App\Http\Controllers\BannerController as Banner;
use App\Http\Controllers\TypeController as Type;
use App\Http\Controllers\MonthController as Month;
use App\Http\Controllers\TeamController as Team;
use App\Http\Controllers\EventController as Event;
use Illuminate\Support\Facades\Artisan;

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return 'Application cache cleared';
});


Route::get('/optimize', function() {
    // $exitCode = Artisan::call('cache:clear');
    Artisan::call('optimize');
    return 'Cache cleared and optimized successfully.';
});

// Route::get('/',function(){
//     redirect('/admin');
// })->middleware('admin.auth');



//Admin
Route::prefix('/')->group(function () { //admin
    //guest
    Route::get('/login', [Auth::class, 'login'])->name('admin.login');
    Route::post('/loginVerify',[Auth::class,'authenticate'])->name('admin-auth');


    // Route::get('/data',function(){
    //     $data=array();
    //     $data['image'] = App\Models\Project::find(5)->image;
    //     $data['video'] = App\Models\Project::find(5)->video;
    //     return $data;
    // });


        /*---------------------------- Authentication ------------------------------------ */
        Route::group(['middleware' => 'admin.auth'], function () {
            //Dashboard
            Route::get('/', [Auth::class, 'index'])->name('admin');
            Route::get('/dashboard', function () {  return view('admin.dashboard'); })->name('adminDashboard');
            Route::get('/logout',[Auth::class,'logout'])->name('admin-logout');


             /*************************Categories Page ***************/
            // Route::prefix('/categories')->group(function () {
            //     Route::get('/', [Category::class, 'index'])->name('categories');
            //     Route::get('/add', [Category::class, 'create'])->name('categories-add');
            //     Route::post('/store', [Category::class, 'store'])->name('categories-store');
            //     Route::get('/view/{id}', [Category::class, 'view'])->name('categories-view');
            //     Route::get('/edit/{id}', [Category::class, 'edit'])->name('categories-edit');
            //     Route::post('/update/{id}', [Category::class, 'update'])->name('categories-update');
            //     Route::post('/delete', [Category::class, 'delete'])->name('categories-delete');
            // })->name('categories');
              /*************************project Page ***************/
            Route::prefix('/banners')->group(function () {
                Route::get('/', [Banner::class, 'index'])->name('banners');
                Route::get('/add', [Banner::class, 'create'])->name('banners-add');
                Route::post('/store', [Banner::class, 'store'])->name('banners-store');
                // Route::post('/gallery', [Banner::class, 'gallery'])->name('banners-delete');
                // Route::post('/utube', [Banner::class, 'utube'])->name('banners-delete');
                Route::get('/view/{id}', [Banner::class, 'view'])->name('banners-view');
                Route::get('/edit/{id}', [Banner::class, 'edit'])->name('banners-edit');
                Route::post('/update/{id}', [Banner::class, 'update'])->name('banners-update');
                Route::post('/delete', [Banner::class, 'delete'])->name('banners-delete');
            })->name('banners');

             /*************************event tickers Page ***************/
             Route::prefix('/event-tickers')->group(function () {
                Route::get('/', [EventTicker::class, 'index'])->name('event-tickers');
                Route::get('/add', [EventTicker::class, 'create'])->name('event-tickers-add');
                Route::post('/store', [EventTicker::class, 'store'])->name('event-tickers-store');
                Route::get('/view/{id}', [EventTicker::class, 'view'])->name('event-tickers-view');
                Route::get('/edit/{id}', [EventTicker::class, 'edit'])->name('event-tickers-edit');
                Route::post('/update/{id}', [EventTicker::class, 'update'])->name('event-tickers-update');
                Route::post('/delete', [EventTicker::class, 'delete'])->name('event-tickers-delete');
            })->name('event-tickers');



             /************************* Project Types Page ***************/
             Route::prefix('/types')->group(function () {
                Route::get('/', [Type::class, 'index'])->name('types');
                Route::get('/add', [Type::class, 'create'])->name('types-add');
                Route::post('/store', [Type::class, 'store'])->name('types-store');
                Route::get('/view/{id}', [Type::class, 'view'])->name('types-view');
                Route::get('/edit/{id}', [Type::class, 'edit'])->name('types-edit');
                Route::post('/update/{id}', [Type::class, 'update'])->name('types-update');
                Route::post('/delete', [Type::class, 'delete'])->name('types-delete');
            })->name('types');

               /************************* Months Page ***************/
               Route::prefix('/months')->group(function () {
                Route::get('/', [Month::class, 'index'])->name('months');
                Route::get('/add', [Month::class, 'create'])->name('months-add');
                Route::post('/store', [Month::class, 'store'])->name('months-store');
                Route::get('/view/{id}', [Month::class, 'view'])->name('months-view');
                Route::get('/edit/{id}', [Month::class, 'edit'])->name('months-edit');
                Route::post('/update/{id}', [Month::class, 'update'])->name('months-update');
                Route::post('/delete', [Month::class, 'delete'])->name('months-delete');
            })->name('months');

                /************************* Team Page ***************/
               Route::prefix('/teams')->group(function () {
                Route::get('/', [Team::class, 'index'])->name('teams');
                Route::get('/add', [Team::class, 'create'])->name('teams-add');
                Route::post('/store', [Team::class, 'store'])->name('teams-store');
                Route::get('/view/{id}', [Team::class, 'view'])->name('teams-view');
                Route::get('/edit/{id}', [Team::class, 'edit'])->name('teams-edit');
                Route::post('/update/{id}', [Team::class, 'update'])->name('teams-update');
                Route::post('/delete', [Team::class, 'delete'])->name('teams-delete');
            })->name('teams');

               /************************* Events Page ***************/
               Route::prefix('/events')->group(function () {
                Route::get('/', [Event::class, 'index'])->name('events');
                Route::get('/add', [Event::class, 'create'])->name('events-add');
                Route::post('/store', [Event::class, 'store'])->name('events-store');
                Route::get('/view/{id}', [Event::class, 'view'])->name('events-view');
                Route::get('/edit/{id}', [Event::class, 'edit'])->name('events-edit');
                Route::post('/update/{id}', [Event::class, 'update'])->name('events-update');
                Route::post('/delete', [Event::class, 'delete'])->name('events-delete');
            })->name('events');
            // Route::get('/check',function(){
            //     $data = array();
            //     $project = App\Models\Project::find(5);
            //     // $data['category'] = App\Models\Project::find(1)->category;
            //     $data['clientLogo'] = $project->images;
            //     $img = App\Models\Image::find(1);
            //     $data['video'] = $img->project;
            //     return $data;
            // });





        });
});



 /******************* AJAX *******************/
 Route::match (['get', 'post'], 'ajax/{path}', [Ajax::class, 'ajax_handler'])->middleware('ajax');
