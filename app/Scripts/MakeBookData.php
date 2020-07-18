<?php

namespace App\Scripts;

class MakeBookData {

    public $makeUrl;

    public function __construct(MakeUrl $makeUrl)
    {
        $this->makeUrl = $makeUrl;
    }
/*
    public function bookDataSort() {}
*/
    

    public function googleBooks($searchWord, $SelectPage = 1, $max = 20, $order='relevance')
    {
        //dd($SelectPage);
        //$SelectPage = $SelectPage <= 1 ? 0 : (($SelectPage - 1) * $max - 1);
        $SelectPage = ($SelectPage - 1) * $max; 
        //dd($SelectPage);
        $url = $this->makeUrl->makeUrlGoogleBooks($searchWord, $SelectPage, $max, $order);
        $infoList = config('api.bookData.googleBooks');
        try {
            $bookData = json_decode(file_get_contents($url), true);
        } catch (\Exception $e) { 
            if($SelectPage > 100) {
                $result["items"] = [];
                return $result;
            }
            
            throw new \Exception('Error Processing Request');
        }
        //dd($bookData);
        if($SelectPage > 1 && !array_key_exists('items', $bookData)){
            $result["items"] = [];
            return $result;
        }
        $result["totalItems"] = $bookData["totalItems"];
        $bookList = $bookData["items"];
        $items = [];
        $count = count($bookList);
        for($i=0; $i<$count; $i++) {
            $bookList[$i] = $bookList[$i]["volumeInfo"];
            foreach($infoList as $info) {
                if(isset($bookList[$i][$info])) {
                    $value = $bookList[$i][$info];
                } else {
                    if($info === "identifier") {
                        $items[$i]["isbn"] = 'ID:'.mt_rand();
                        //$items[$i]["isbn"] = '';
                    }
                    continue;
                }

                switch($info) {
                    case "authors":
                        //$items[$i][$info] = is_array($value) ? implode(', ', $value) : $value;
                        $items[$i][$info] = count($value) > 1 ? $value : $value[0];
                        //$items[$i][$info] = $value;
                        break;
                    case "industryIdentifiers":
                        if(count($value) > 1) {
                            foreach ($value as $isbn) {

                                if ($isbn["type"] === "ISBN_13") {
                                    $items[$i]["isbn"] = $isbn["identifier"];
                                }
                            }
                        } else {
                            $items[$i]["isbn"] = $value[0]["identifier"];
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
        //dd($bookList);
        //dd($result);
        return $result;
    }

    public function googleBooksIsbnSearch($isbn) {
        $url = $this->makeUrl->getUrl('https://www.googleapis.com/books/v1/volumes', ['q' => "isbn:${isbn}"]);
        //$url = "https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}";
        try {
            $bookData = json_decode(file_get_contents($url), true);
        } catch(\Exception $e){
            return null;
        }
        if(!isset($bookData["items"])) {
            return null;
        }
        //dd($bookData);
        $bookList = $bookData["items"][0]["volumeInfo"];
        $infoList = config('api.bookData.googleBooks');
        $result = [];
        
        foreach($infoList as $info) {
            if(!isset($bookList[$info])) {
                continue;
            }
            switch($info) {
                case "authors":
                    $result[$info] = implode(' ', $bookList[$info]);
                    break;
                case "industryIdentifiers":
                        if(count($bookList[$info]) > 1) {
                            foreach ($bookList[$info] as $isbn) {

                                if ($isbn["type"] === "ISBN_13") {
                                    $result["isbn"] = $isbn["identifier"];
                                }
                            }
                        } else {
                            $result["isbn"] = $bookList[0]["identifier"];
                        }
                        break;
                case "imageLinks":
                    $result["thumbnail"] = $bookList[$info]["thumbnail"] ?? null;
                    $result["smallThumbnail"] = $bookList[$info]["smallThumbnail"] ?? null;
                    break;
                default:
                    $result[$info] = $bookList[$info];
            }
        }
        
        //dd($result);
        return $result;
    }
}
