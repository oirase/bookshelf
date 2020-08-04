<?php

namespace App\Http\Middleware;

use Closure;
use App\Services\ConvertKeyCase;

class ToCamel
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
        $response = $next($request);

        $data = $response->getData();
        $result = $this->convertKeyCase->toCamel($data);
        $response->setData($result);

        return $response;
    }
}
