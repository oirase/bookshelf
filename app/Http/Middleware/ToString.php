<?php

namespace App\Http\Middleware;

use Closure;

class ToString
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
        if (isset($request->addBook['authors']) 
            && is_array($request->addBook['authors'])) {
            $data = $request->input();
            $data['addBook']['authors'] = implode(',', $data['addBook']['authors']);
            $request->merge($data);
        }

        return $next($request);
    }
}
