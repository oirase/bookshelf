<?php

namespace App\Repository;

use App\Services\MakeUrl;


class GoogleBooksRepository {

    protected $makeUrl;

    public function __construct(MakeUrl $makeUrl)
    {
        $this->makeUrl = $makeUrl;
    }
    

    public function getData($search_word, $select_page = 1, $max = 20, $order='relevance')
    {

        $select_page = ($select_page - 1) * $max; 

        $url = $this->makeUrl->makeUrlGoogleBooks($search_word, $select_page, $max, $order);
        
        try {
            $bookData = json_decode(file_get_contents($url), true);

        } catch (\Exception $e) { 
            if ($select_page > 100) {
                $result["items"] = [];
                return $result;
            }
            
            throw new \Exception('Error Processing Request');
        }

        return $bookData;
    }

    public function getSingleData($id) {
        $url = config('api.url.googleBooks');
        $url = "{$url}/{$id}";
        try {
            $bookData = json_decode(file_get_contents($url), true);

        } catch(\Exception $e){
            return null;
        }
        if (!$bookData) {
            return null;
        }

        return $bookData;
        
    }
}
