<?php

namespace App\Http\View\Composers;

use App\Repositories\UserRepository;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SearchComposer
{

    public $response;

    public function __constract(Request $response)
    {
        $this->response = $response;
    }

    public function compose(View $view)
    {
        dd($this->response);
        $view->with('totalPages', 2000)
             ->with('number', 100);
    }
}
