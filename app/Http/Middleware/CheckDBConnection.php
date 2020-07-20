<?php

namespace App\Http\Middleware;

use Closure;
use DB;

class CheckDBConnection
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

        echo 'CheckDBConnection';
        
        try {
            DB::connection()->getPdo();
            if(DB::connection()->getDatabaseName())
            {
                echo "conncted sucessfully to database ".DB::connection()->getDatabaseName();
            }
        } catch (\Exception $e) {
            die('database error');
        }
        return $response;
    }
}
