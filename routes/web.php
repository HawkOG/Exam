<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});
Route::get('/index', function () {
    return view('pages.home');
})->middleware('auth');


Route::get('/create_employee', function () {
    return view('pages.create');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('employees', 'EmployeeController');
Route::get('/logout', 'Auth\LoginController@logout');