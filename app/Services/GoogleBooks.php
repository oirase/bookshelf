<?php

namespace App\Searvices;

use App\Repository\GoogleBooksRepository;

class GoogleBooks {

    private $google_books_repository;

    private $column;

    public function __construct(GoogleBooksRepository $google_books_repository)
    {
        $this->google_books_repository = $google_books_repository;
        $this->column = ["title", "authors", "publisher", "publishedDate", "description", "industryIdentifiers", "pageCount", "imageLinks"];
    }
    

    public function googleBooks($search_word, $select_page = 1, $max = 20, $order='relevance')
    {
        $book_data = $this->google_books_repository->getData($search_word, $select_page, $max, $order);

        if ($select_page > 1 && !array_key_exists('items', $book_data)) {
            $result["items"] = [];
            return $result;
        }
        
        $book_list = $book_data["items"];
        $items = [];
        $count = count($book_list);

        for ($i=0; $i<$count; $i++) {
            $items[$i]["bookId"] = $book_list[$i]["id"];
            $book_list[$i] = $book_list[$i]["volumeInfo"];

            foreach ($this->column as $firld) {
                if (isset($book_list[$i][$firld])) {
                    $value = $book_list[$i][$firld];
                } else {
                    continue;
                }

                switch ($firld) {
                    
                    case "authors":
                        $items[$i][$firld] = count($value) > 1 ? $value : $value[0];
                        break;

                    case "industryIdentifiers":
                        if(count($value) > 1) {
                            $items[$i]["isbn"] = $this->isbnCheck($value);
                        }
                        break;

                    case "imageLinks":
                        $items[$i]["thumbnail"] = str_replace('http', 'https', $value["thumbnail"]);
                        $items[$i]["smallThumbnail"] = str_replace('http', 'https', $value["smallThumbnail"]);
                        break;

                    default:
                        $items[$i][$firld] = $value;
                }
            }
        }
        $result["items"] = $items;
        $result["totalItems"] = $book_data["totalItems"];


        return $result;
    }

    public function googleBooksIdSearch($id)
    {
        
        $book_data = $this->google_books_repository->getSingleData($id);
        $result = [];
        $result["bookId"] = $book_data["id"];
        $book = $book_data["volumeInfo"];
        
        foreach ($this->column as $firld) {
            if (!isset($book[$firld])) {
                continue;
            }

            switch ($firld) {
                case "authors":
                    $result[$firld] = implode(' ', $book[$firld]);
                    break;

                case "industryIdentifiers":
                    if(count($book[$firld]) > 1) {
                        $result["isbn"] = $this->isbnCheck($book[$firld]);
                    }
                    break;

                case "imageLinks":
                    $result["thumbnail"] = $book[$firld]["thumbnail"] ?? null;
                    $result["smallThumbnail"] = $book[$firld]["smallThumbnail"] ?? null;
                    break;

                default:
                    $result[$firld] = $book[$firld];
            }
        }

        return $result;
    }

    private function isbnCheck($isbn_list)
    {
       foreach ($isbn_list as $isbn) {

            if ($isbn["type"] === "ISBN_13") {
                return $isbn["identifier"];
            }

            if ($isbn["type"] === "ISBN_10") {
                return $isbn["identifier"];
            }
        }     
    }
}
