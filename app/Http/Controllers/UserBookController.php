<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\MemberInfo;
use App\Book;

class UserBookController extends Controller
{

    public $userId;

    public $limit;

    public function __construct(Request $request) {


        if(Auth::check()) {
            $this->middleware(function ($request, $next){
                $this->userId = \Auth::user()->user_id;
                return $next($request);
            });
        }
        
        //$this->userId = '4ad49627-c212-456f-bd20-e474d4b20897';
        $this->limit = 20;
    }

    public function getUserBookList(Request $request)
    {
        
        $SelectPage = $request->selectPage;
        $limit =  $this->limit;
        $offset = ($SelectPage - 1) * $limit;
        $column = ['books.book_id as bookId', 'isbn', 'title', 'authors', 'published_date as publishedDate', 'page_count as pageCount', 'description', 'thumbnail', 'small_thumbnail as smallThumbnail'];
        if($request->order == 'created_at DESC' || $request->order == 'created_at ASC') {
            $bookId = MemberInfo::where('user_id', $this->userId)->orderByRaw($request->order)->pluck('book_id');
            $bookData = Book::select($column)->join('member_info', 'books.book_id', '=', 'member_info.book_id')
                                        ->where('member_info.user_id', $this->userId)
                                        ->orderByRaw("member_info.{$request->order}")
                                         ->offset($offset)
                                         ->limit($limit)

                                         ->get();

        } else {
            $bookId = MemberInfo::where('user_id', $this->userId)->pluck('book_id');
            $bookData = Book::select($column)->whereIn('book_id', $bookId)
                                         ->offset($offset)
                                         ->limit($limit)
                                         ->orderByRaw($request->order)
                                         ->get();
        }


        foreach($bookData as $key => $book) {
            $bookData[$key]['authors'] = explode(',', $book['authors']);
        }


        $result["bookIdList"] =  $bookId;
        $result["items"] = $bookData;
        $result["totalItems"] = count($bookId);
        
        return $result;

    }

    public function searchUserBookList(Request $request)
    {

        $searchWord = $request->searchWord;
        $SelectPage = $request->selectPage;
        $limit =  $this->limit;

        $offset = ($SelectPage - 1) * $limit;
        $bookId = MemberInfo::where('user_id', $this->userId)->pluck('book_id');

        $column = ['book_id', 'isbn', 'title', 'authors', 'published_date as publishedDate', 'page_count as pageCount', 'description', 'thumbnail', 'small_thumbnail as smallThumbnail'];
        $bookData = Book::select($column)->whereIn('book_id', $bookId)
                                         ->Where(function($query) use ($searchWord) {
                                            $query->where('title', 'like', "%{$searchWord}%")
                                                  ->orWhere('authors', 'like', "%{$searchWord}%")
                                                  ->orWhere('published_date', 'like', "%{$searchWord}%")
                                                  ->orWhere('description', 'like', "%{$searchWord}%");
                                         })
                                         ->offset($offset)
                                         ->limit($limit)
                                         ->get();

        $totalItems = Book::whereIn('book_id', $bookId)
                                         ->Where(function($query) use ($searchWord) {
                                            $query->where('title', 'like', "%{$searchWord}%")
                                                  ->orWhere('authors', 'like', "%{$searchWord}%")
                                                  ->orWhere('published_date', 'like', "%{$searchWord}%")
                                                  ->orWhere('description', 'like', "%{$searchWord}%");
                                         })
                                         ->count();

        foreach($bookData as $key => $book) {
            $bookData[$key]['authors'] = explode(',', $book['authors']);
        }
        $result['bookIdList'] =  $bookId;
        $result['items'] = $bookData;
        $result["totalItems"] = $totalItems;

        
        return $result;
    }

    public function addBook(request $request)
    {
        $addBook = json_decode($request->addBook, true);
        $column = Schema::getColumnListing('books');
        $column = array_diff($column, ['id', 'created_at']);
        if (is_array($addBook['authors'])) {
            $addBook['authors'] = implode(', ', $addBook['authors']);
        }

        $book = [];
        foreach($addBook as $key => $value) {
            $book[Str::snake($key)] = $value;
        }

        foreach($column as $value) {
            if(!array_key_exists($value, $book)) {
                $book[$value] = '';
            }
        }
        if (Book::where('book_id', $book["book_id"])->doesntExist()) {
            Book::insert($book);
        }

        MemberInfo::insert(["user_id" => $this->userId, "book_id" => $book["book_id"]]);
        return 'success';
    }

    public function deleteBook(request $request)
    {

        $bookId = $request->bookId;
        MemberInfo::where([
            ['user_id', $this->userId],
            ['book_id', $bookId]
        ])->delete();

        if (MemberInfo::where('book_id', $bookId)->doesntExist()) {
            Book::where('book_id', $bookId)->delete();
        }

        return 'success';
    }
}
