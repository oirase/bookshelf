<?php

namespace App\Repository;

use App\Models\Book;
use App\Models\MemberInfo;

class BookRepository {
 
    protected $model;

    public function __construct(Book $book)
    {
        $this->model = $book;
    }

    public function getUserBook($column, $book_id, $offset, $limit, $order)
    {
        return $this->model::select($column)
            ->whereIn('book_id', $book_id)
           ->offset($offset)
           ->limit($limit)
           ->orderByRaw($order)
           ->get();
    }

    public function getOrderReferenceMemberInfo($column, $book_id, $userId, $offset, $limit, $order)
    {
        return $this->model::select($column)
            ->join('member_info', 'books.book_id', '=', 'member_info.book_id')
            ->where('member_info.user_id', $userId)
            ->orderByRaw("member_info.{$order}")
            ->offset($offset)
            ->limit($limit)
            ->get();
    }

    public function searchUserBook($column, $book_id, $search_word, $offset, $limit)
    {
        return $this->model::select($column)
            ->whereIn('book_id', $book_id)
           ->Where(function($query) use ($search_word) {
                $query->where('title', 'like', "%{$search_word}%")
                    ->orWhere('authors', 'like', "%{$search_word}%")
                    ->orWhere('published_date', 'like', "%{$search_word}%")
                    ->orWhere('description', 'like', "%{$search_word}%");
            })
            ->offset($offset)
            ->limit($limit)
            ->get();
    }

    public function countSearchUserBook($column, $book_id, $search_word)
    {
        return $this->model::whereIn('book_id', $book_id)
            ->Where(function($query) use ($search_word) {
                $query->where('title', 'like', "%{$search_word}%")
                      ->orWhere('authors', 'like', "%{$search_word}%")
                      ->orWhere('published_date', 'like', "%{$search_word}%")
                      ->orWhere('description', 'like', "%{$search_word}%");
            })
            ->count();
    }

    public function insert($book)
    {
        if ($this->model::where('book_id', $book["book_id"])->doesntExist()) {
            $this->model::insert($book);
        }
    }

    public function delete($book_id)
    {
        if (MemberInfo::where('book_id', $book_id)->doesntExist()) {
            $this->model::where('book_id', $book_id)->delete();
        }
    }


}
