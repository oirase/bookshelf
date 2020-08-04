<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script src="{{ asset('js/index.js') }}" defer></script>
        <title>Laravel</title>
    </head>
    <body>
    <div id="root"></div>
        <p>search</p>
<form action="{{ route('insert') }}" method="post">
    @csrf
    <input type="hidden" value="{{ $book }}" name="addBook">
    <button type="submit">addbok</button>
</form>
<form action="{{ route('delete') }}" method="post">
    @csrf
    <input type="hidden" value="PKEY:BT000013766200100101900206" name="isbn">
    <button type="submit">delete</button>
</form>
<form action="{{ route('user/search') }}" method="post">
    @csrf
    <input type="text" name="searchWord">
    <button type="submit">usersearchword</button>
</form>
<form action="{{ route('user') }}" method="post">
    @csrf
    <input type="text" name="selectPage" value="0">
    <input type="text" name="order" value="created_at ASC">
    <button type="submit">user</button>
</form>
<form action="{{ route('search') }}" method="post">
    @csrf
    <input type="text" name="searchWord" value="つぐもも">
    <input type="text" name="selectPage">
    <input type="text" name="order" value="relevance">
    <button type="submit">searchword</button>
</form>
{{--
<form action="{{ route('book/1') }}" method="post">
    @csrf
    <input type="text" name="isbn" value="9784798161402">
    <button type="submit">searchword</button>
</form>
--}}
