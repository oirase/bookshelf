<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('css/mail.css') }}" rel="stylesheet">
        <title>Bookshelf</title>
    </head>
    <body>
     <header class="header">
            <a><h1 class="h1">Bookshelf</h1></a>
        </header>
    <div class="content">
        @yield('content')
    </div>
    <footer class="footer">
        <a href="{{ route('index') }}">{{ route('index') }}</a>
    </footer>
    </body>
</html>
