<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MemberInfo;

class MethodTestController extends Controller
{

    public $userId;
    public $bookId;

    public function __construct(Request $request) {

        $this->userId = '4ad49627-c212-456f-bd20-e474d4b20897';
        $this->bookId = '100';
        $this->limit = 20;
    }

    public function addBook() {
        MemberInfo::insert(["user_id" => $this->userId, "book_id" => $this->bookId]);
    }
}
