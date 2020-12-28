<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return view('form.contact');
    }

    public function complete(Request $request)
    {
        $data = $this->getValidateData($request);
        Mail::to($request->email)->send(new ContactMail($data));
        return view('form.complete');
    }


    public function getValidateData(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'bail|required|string|max:255',
            'email' => 'required|string|email',
            'body' => 'required|string'
        ]);
        return $validateData;
    }
}
