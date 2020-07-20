<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchBookController extends Controller
{


    public function getData(Request $request)
    {
        return null;
        $data = app('makeBookData')->googleBooks($request->searchWord, $request->selectPage, 20, $request->order);
        
        return $data;
        
    }

    public function getBook(Request $request, $bookId)
    {
        $data = app('makeBookData')->googleBooksIdSearch($bookId);
        
        if($data == null) {
            return redirect()->route('index');
        }
        
        return view('book', ['book' => $data]);
    }

}
