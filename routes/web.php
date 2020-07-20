<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::get('/test', 'TestController@index')->name('test');

Route::get('/mail', 'TestController@previewMail');

Route::get('/', 'IndexController@index')->middleware('checkDB')->name('index');

Route::post('/search', 'SearchBookController@getData')->name('search');

//Route::post('/user', 'UserBookController@getUserBookList')->middleware('cors')->name('user');
Route::match(['options', 'post'],'/user', 'UserBookController@getUserBookList')->middleware('cors')->name('user');

Route::post('/user/search', 'UserBookController@searchUserBookList')->name('user/search');

Route::post('/insert', 'UserBookController@addBook')->name('insert');

Route::post('/delete', 'UserBookController@deleteBook')->name('delete');

Route::get('/book/{id}', 'SearchBookController@getBook')->name('book');

Route::get('/contact', 'ContactController@index')->name('contact');

Route::post('/complete', 'ContactController@complete')->name('complete');

