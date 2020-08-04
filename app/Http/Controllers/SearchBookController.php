<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Searvices\GoogleBooks;

class SearchBookController extends Controller
{
    private $google_books;

    public function __construct(GoogleBooks $google_books) {
        $this->google_books = $google_books;
    }


    public function getData(Request $request)
    {   
        $data = $this->google_books->googleBooks($request->searchWord, $request->selectPage, 20, $request->order);
        
        return $data;   
    }

    public function getBook(Request $request, $bookId)
    {
        $data = $this->google_books->googleBooksIdSearch($bookId);
        
        if ($data == null) {
            return redirect()->route('index');
        }
        
        return view('book', ['book' => $data]);
    }

}
