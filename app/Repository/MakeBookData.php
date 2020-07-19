<?php

namespace App\Repository;

class MakeBookData {

    public $makeUrl;

    public function __construct(MakeUrl $makeUrl)
    {
        $this->makeUrl = $makeUrl;
    }
    

    public function googleBooks($searchWord, $SelectPage = 1, $max = 20, $order='relevance')
    {


        $SelectPage = ($SelectPage - 1) * $max; 

        $url = $this->makeUrl->makeUrlGoogleBooks($searchWord, $SelectPage, $max, $order);
        $infoList = config('api.bookData.googleBooks');
        try {
             $bookData = json_decode(file_get_contents($url), true);

        } catch (\Exception $e) { 
            if($SelectPage > 100) {
                $result["items"] = [];
                return $result;
            }
            
            //throw new \Exception('Error Processing Request');
            return $e;
        }

        if($SelectPage > 1 && !array_key_exists('items', $bookData)){
            $result["items"] = [];
            return $result;
        }
        //return 'search error';
        $result["totalItems"] = $bookData["totalItems"];

        $bookList = $bookData["items"];
        $items = [];
        $count = count($bookList);
        //return 'search result';
    try {
        for($i=0; $i<$count; $i++) {
            $items[$i]["bookId"] = $bookList[$i]["id"];
            $bookList[$i] = $bookList[$i]["volumeInfo"];
            foreach($infoList as $info) {
                if(isset($bookList[$i][$info])) {
                    $value = $bookList[$i][$info];
                } else {
                    
                    continue;
                }

                switch($info) {
                    
                    case "authors":

                        $items[$i][$info] = count($value) > 1 ? $value : $value[0];

                        break;
                    case "industryIdentifiers":
                        if(count($value) > 1) {
                            foreach ($value as $isbn) {

                                if ($isbn["type"] === "ISBN_13") {
                                    $items[$i]["isbn"] = $isbn["identifier"];
                                    break;
                                }

                                if ($isbn["type"] === "ISBN_10") {
                                    $items[$i]["isbn"] = $isbn["identifier"];
                                }
                            }
                        }
                        
                        break;
                    case "imageLinks":
                        $items[$i]["thumbnail"] = $value["thumbnail"];
                        $items[$i]["smallThumbnail"] = $value["smallThumbnail"];
                        break;
                    default:
                        $items[$i][$info] = $value;
                }
            }
        }
        $result["items"] = $items;
    } catch (\Exception $e) {
        return $e;
    }


        return $result;
    }

    public function googleBooksIdSearch($id) {
        $url = config('api.url.googleBooks');
        $url = "{$url}/{$id}";
        try {
            $bookData = json_decode(file_get_contents($url), true);

        } catch(\Exception $e){
            return null;
        }
        if(!$bookData) {
            return null;
        }
        //dd($bookData);
        $result = [];
        $result["bookId"] = $bookData["id"];
        $book = $bookData["volumeInfo"];
        $infoList = config('api.bookData.googleBooks');
        
        foreach($infoList as $info) {
            if(!isset($book[$info])) {
                continue;
            }
            switch($info) {
                case "authors":
                    $result[$info] = implode(' ', $book[$info]);
                    break;
                case "industryIdentifiers":

                        if(count($book[$info]) > 1) {
                            foreach ($book[$info] as $isbn) {

                                if ($isbn["type"] === "ISBN_13") {
                                    $result["isbn"] = $isbn["identifier"];
                                    break;
                                }

                                if ($isbn["type"] === "ISBN_10") {
                                    $result["isbn"] = $isbn["identifier"];
                                }
                            }
                        }

                        break;
                case "imageLinks":
                    $result["thumbnail"] = $book[$info]["thumbnail"] ?? null;
                    $result["smallThumbnail"] = $book[$info]["smallThumbnail"] ?? null;
                    break;
                default:
                    $result[$info] = $book[$info];
            }
        }

        return $result;
    }
}
