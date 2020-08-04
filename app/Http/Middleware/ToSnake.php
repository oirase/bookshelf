<?php

namespace App\Http\Middleware;

use Closure;
use App\Services\ConvertKeyCase;

class ToSnake
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    private $convertKeyCase;

    public function __construct(ConvertKeyCase $convertKeyCase)
    {
        $this->convertKeyCase = $convertKeyCase;
    }

    public function handle($request, Closure $next)
    {
        $data = $request->input();
        if (isset($request->addBook)) {
            $data["addBook"] = json_decode($data["addBook"], true);
            $data["addBook"] = $this->convertKeyCase->toSnake($data["addBook"]);
        }

        $request->replace($data);

        return $next($request);
    }
}
