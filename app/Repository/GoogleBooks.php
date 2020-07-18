<?php

namespace App\Repository;

class MakeBookData {

    public $url;
    public $makeUrl;

    public function __construct(MakeUrl $makeUrl)
    {
        $this->url = config('api.url.default');
        $this->makeUrl = $makeUrl;
    }

        public function makeUrl($searchWord, $selectPage, $max, $order)
    {
        $query = [ "q" => $searchWord, "startIndex" => $selectPage, "maxResults" => $max,"orderBy" => $order ];
        $api = config('api.url.default');
        return $this->getUrl($api, $query);
    }
/*
    public function bookDataSort() {}

    public function googleBooksIsbnSearch($isbn) {
        $this->makeUrl('https://www.googleapis.com/books/v1/volumes', ['q=isbn' => '[{$isbn}]'])
        $bookData = json_decode(file_get_contents(`{}`), true);
    }
*/
    public function googleBooks($query)
    {
        //dd($SelectPage);
        $selectPage = $query->SelectPage;
        $searchWord = $query->SelectPage;
        $order = $query->order;

        $SelectPage = $SelectPage <= 1 ? 0 : (($SelectPage - 1) * $max - 1);

        $url = [ "q" => $searchWord, "startIndex" => $selectPage, "maxResults" => $max, "orderBy" => $order ];
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
}
