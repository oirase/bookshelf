<?php

namespace App\Repository;

class MakeUrl {

    public function getUrl($url, $query)
    {
        $query = http_build_query($query);
        return $url.'?'.$query;
    }

    public function makeUrlGoogleBooks($searchWord, $selectPage, $max, $order)
    {
        $query = [ "q" => $searchWord, "startIndex" => $selectPage, "maxResults" => $max,"orderBy" => $order ];
        $api = config('api.url.default');
        return $this->getUrl($api, $query);
    }
}
