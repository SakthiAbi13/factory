<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


use App\Http\Controllers\Api\ProjectController as Project;
use App\Http\Controllers\Api\EventTickerController as EventTicker;
use App\Http\Controllers\Api\MonthController as Month;
use App\Http\Controllers\Api\TeamController as Team;
use App\Http\Controllers\Api\EventController as Event;
use App\Http\Controllers\Api\EmployeeController as Employee;
use App\Http\Controllers\Api\AuthController as Auth;

Route::group(['prefix'=>'v1/'],function(){

    Route::post('/login', [Auth::class, 'authenticate'])->name('login')->middleware('auth:employee');


      /************************* Employee Page ***************/
      Route::prefix('/employees')->group(function () {
        Route::get('/', [Employee::class, 'index'])->name('employees');
        Route::post('/add', [Employee::class, 'create'])->name('employees-add');
        // Route::post('/store', [Employee::class, 'store'])->name('employees-store');
        Route::get('/view/{id}', [Employee::class, 'view'])->name('employees-view');
        Route::get('/edit/{id}', [Employee::class, 'edit'])->name('employees-edit');
        Route::post('/update/{id}', [Employee::class, 'update'])->name('employees-update');
        Route::post('/delete', [Employee::class, 'delete'])->name('employees-delete');
    })->name('employees');

    /****************************************************************** */
    // Route::post('project',[Project::class,'index'])->name('project-index');

    // Route::post('event-ticker',[EventTicker::class,'index'])->name('event-ticker-index');
    // Route::post('project/{id}',[Project::class,'view'])->name('single-project');

    // Route::post('month',[Month::class,'index'])->name('month-index');
    // Route::post('month/{id}',[Month::class,'view'])->name('list-month-projects');

    // Route::post('team',[Team::class,'index'])->name('team-index');
    // Route::post('team/{id}',[Team::class,'view'])->name('list-team-projects');


    // Route::post('event',[Event::class,'index'])->name('event-index');
    // Route::post('event/{id}',[Event::class,'view'])->name('list-event-projects');
});
