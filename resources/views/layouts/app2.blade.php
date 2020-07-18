<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" sizes="180x180" href="icon/image/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="icon/image/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="icon/image/favicon-16x16.png">
        <link rel="manifest" href="icon/site.webmanifest">
        <link rel="mask-icon" href="icon/image/safari-pinned-tab.svg" color="#990000">
        <meta name="msapplication-TileColor" content="#ffc40d">
        <meta name="theme-color" content="#ffffff">
        @stack('js')
        <link href="{{ asset('css/index.css') }}" rel="stylesheet">
        @stack('css')
        @if(Route::currentRouteName() == 'index')
            <title>Bookshelf</title>
        @else
            <title>@yield('title') | Bookshelf</title>
        @endif
    </head>
    <body>
    <x-header class="header"/>
    <x-auth class="auth"/>
    <div>
        @yield('content')
    </div>
    <x-footer class="footer"/>
    </body>
</html>
