<?php

namespace App\Http\Middleware;

use Closure;

class ExtractBookData
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

        //dd($response->original->totalPages);

        //$response->original->totalPages = 2000;

        return $response;
    }
}
