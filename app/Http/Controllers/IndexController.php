<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class IndexController extends Controller
{
        public function index(Request $request, User $user)
    {
        //$user = new User;
        //return $user->morning();

        //$user = User::find(1);
        //Auth::login($user);
        // dd($request->user()->user_id);
        if (!Auth::check()) {
            return view('index', ['value' => 'hello']);
        }
            $data = new \stdClass();
            $data->email = Auth::user()->email;
            $data->name = Auth::user()->name;

        if ($request->session()->exists('notice')) {
            $notice = $request->session()->get('notice');
            return view('index', ['data' => $data, 'notice' => $notice]);
        }
            return view('index', ['data' => $data]);
    }
}
