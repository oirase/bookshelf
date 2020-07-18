<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  prefix="og: http://ogp.me/ns#">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="format-detection" content="telephone=no">
        @stack('meta')
        <meta property="og:title" content="Bookshelf">
        <meta property="og:type" content="website">
        <meta property="og:description" content="書籍検索">
        <meta property="og:url" content="{{ route('index') }}">
        <meta property="og:site_name" content="Bookshelf">
        <meta property="og:image" content="icon/og.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="Twitter:site" content="{{ route('index') }}">
        <meta name="msapplication-TileColor" content="#ffc40d">
        <meta name="theme-color" content="#ffffff">
        @stack('js')
        <link href="{{ asset('css/index.css') }}" rel="stylesheet">
        @stack('css')
        <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png">
        <link rel="manifest" href="icon/site.webmanifest">
        <link rel="mask-icon" href="icon/safari-pinned-tab.svg" color="#5bbad5">
        @if(Route::currentRouteName() == 'index')
            <title>Bookshelf</title>
        @else
            <title>@yield('title') | Bookshelf</title>
        @endif
    </head>
    <body>
    <x-header class="header"/>
    @if(Route::currentRouteName() == 'index')
        <x-auth class="auth"/>
    @endif
    <div>
        @yield('content')
    </div>
    <x-footer class="footer"/>
    </body>
</html>
