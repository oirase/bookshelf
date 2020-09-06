<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Schema;
use App\Models\MemberInfo;
use App\Repository\BookRepository;
use App\Repository\MemberInfoRepository;

class UserBookController extends Controller
{

    private $book_repository;

    private $member_info_repository;

    private $user_id;

    private $limit;

    private $column;


    public function __construct(
        BookRepository $book_repository,
        MemberInfoRepository $member_info_repository
    ) {

        /*
        if(Auth::check()) {
            $this->middleware(function ($request, $next){
                $this->user_id = \Auth::user()->user_id;
                return $next($request);
            });
        }
        */

        //$this->user_id = '4ad49627-c212-456f-bd20-e474d4b20897';
        //$this->middleware('camel');
        //$this->$request = $request;
        $this->book_repository = $book_repository;
        $this->member_info_repository = $member_info_repository;
        //$this->user_id = MemberInfo::value('user_id');

        $this->limit = 20;
        $this->column = ['book_id', 'isbn', 'title', 'authors', 'publisher', 'published_date', 'description', 'page_count', 'thumbnail', 'small_thumbnail'];
    }

    public function getUserBookList(Request $request)
    {
        $this->user_id = $request->user()->user_id;
        $select_page = $request->selectPage;
        $limit =  $this->limit;
        $offset = ($select_page - 1) * $limit;
        $this->column[0] = 'books.book_id';
        $book_id = $this->member_info_repository->getUserbookIdList($this->user_id, $request->order);
        if ($request->order == 'created_at DESC' || $request->order == 'created_at ASC') {
            $book_data = $this->book_repository->getOrderReferenceMemberInfo($this->column, $book_id, $this->user_id, $offset, $limit, $request->order);
        } else {
            $book_data = $this->book_repository->getUserBook($this->column, $book_id, $offset, $limit, $request->order);
        }

        $result["book_id_list"] =  $book_id;
        $result["items"] = $book_data;
        $result["total_items "] = count($book_id);

        return $result;
    }

    public function searchUserBookList(Request $request)
    {
        $this->user_id = $request->user()->user_id;
        $search_word = $request->searchWord;
        $select_page = $request->selectPage;
        $limit =  $this->limit;
        //$order = $request->order;
        $order = 'created_at DESC';
        $offset = ($select_page - 1) * $limit;
        $book_id = $this->member_info_repository->getUserbookIdList($this->user_id, $order);
        $book_data = $this->book_repository->searchUserBook($this->column, $book_id, $search_word, $offset, $limit);
        $total_items  = $this->book_repository->countSearchUserBook($this->column, $book_id, $search_word);

        $result['book_id_list'] =  $book_id;
        $result['items'] = $book_data;
        $result["total_items "] = $total_items ;

        return $result;
    }

    public function addBook(Request $request)
    {
        $this->user_id = $request->user()->user_id;
        $book  = $request->addBook;

        foreach ($this->column as $value) {
            if (!array_key_exists($value, $book)) {
                $book[$value] = '';
            }
        }

        $this->book_repository->insert($book);
        $this->member_info_repository->insert($this->user_id, $book["book_id"]);

        return 'success';
    }

    public function deleteBook(Request $request)
    {
        $this->user_id = $request->user()->user_id;
        //dd($request->user());
        $book_id = $request->bookId;
        $this->member_info_repository->delete($this->user_id, $book_id);
        $this->book_repository->delete($book_id);

        return 'success';
    }
}
