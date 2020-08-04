<?php

namespace App\Services;

class MakeUrl {

    public function getUrl($url, $query)
    {
        $query = http_build_query($query);
        return $url.'?'.$query;
    }

    public function makeUrlGoogleBooks($search_word, $select_page, $max, $order)
    {
        $query = [ "q" => $search_word, "startIndex" => $select_page, "maxResults" => $max,"orderBy" => $order ];
        $api = config('api.url.default');
        return $this->getUrl($api, $query);
    }
}
