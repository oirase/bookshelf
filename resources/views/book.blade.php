@extends('layouts.app')

@section('title')
    {{ $book['title'] }} | 書籍情報
@endsection

@push('css')
    <link href="{{ asset('css/book.css') }}" rel="stylesheet">
@endpush

@section('content')
    <div class="contents">
      <div class="book">
        <div class="book__data">
          <div class="book__img-wrapper">
            @isset($book['thumbnail'])
                <img src="{{ $book['thumbnail'] }}" />
            @endisset
          </div>
            <ul class="book__info">
                @isset($book['title'])
                    <li class="book__text">{{ $book['title'] }}</li>
                @endisset
                @isset($book['authors'])
                    <li class="book__text">{{ $book['authors'] }}</li>
                @endisset
                @isset($book['publisher'])
                    <li class="book__text">{{ $book['publisher'] }}</li>
                @endisset
                @isset($book['publishedDate'])
                    <li class="book__text">{{ $book['publishedDate'] }}</li>
                @endisset
                @isset($book['isbn'])
                    <li class="book__text">{{ $book['isbn'] }}</li>
                @endisset
            </ul>
        </div>
        @isset($book['description'])
            <div class="book__description">{{ $book['description'] }}</div>
        @endisset
      </div>
        <a class="book__a" href="{{ route('index') }}">トップページ</a>
    </div>
@endsection
