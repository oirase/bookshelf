<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
        public function index()
    {   
        if(\Auth::check()) {
            echo \Auth::user()->user_id;
        }
        return view('index');
    }
}
