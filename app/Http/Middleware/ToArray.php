<?php

namespace App\Http\Middleware;

use Closure;

class ToArray
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        $data = $response->getData();
        
        foreach ($data->items as $key => $book) {
            $data->items[$key]->authors = explode(',', $book->authors);
        }

        $response->setData($data);

        return $response;
    }
}
