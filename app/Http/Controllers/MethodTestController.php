<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MemberInfo;
use App\Book;
use App\User;
use App\Http\Controllers\UserBookController;

class MethodTestController extends Controller
{

    public $userId;
    public $bookId;

    public function __construct(Request $request) {

        $this->userId = User::value('user_id');
        $this->bookId = Book::value('book_id');

    }
/*
    public function addBook() {
        MemberInfo::insert(["user_id" => $this->userId, "book_id" => $this->bookId]);
    }
*/
    public function addBook(Request $request, UserBookController $UserBookController) {
        $book = Book::first();
        $request->addbook = $book;
        $result = $UserBookController->addBook($request);
        return $result;
    }
}
