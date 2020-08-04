<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Routing\UrlGenerator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('googleBooks', \App\Searvices\GoogleBooks::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(UrlGenerator $url)
    {
        //if (in_array(config('app.env'),['prd', 'stg'], true)){
            $url->forceShema('https');
        //}
        /*
        if(request()->isSecure()) {
            \URL::forceShema('https');
        }
        */
    }
}
