@extends('layouts.app')

@section('title')
    お問い合わせ
@endsection

@push('js')
    <script src="{{ asset('js/changeFormColor.js') }}" defer></script>
@endpush

@section('content')
    <div class="form__wrapper">
        <form class="form" method="POST" action="{{ route('complete') }}" >
            @csrf
            <label class="form__label" for="name">お名前</label>
            <input class="form__text" id="name" type="text" name="name" value="aaa" required autocomplete="name" >
            @error('name')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label  class="form__label" for="email">メールアドレス</label>
            <input class="form__text" id="email" type="email" name="email" value="mahoganyshelf@outlook.com" required autocomplete="email">
            @error('email')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label class="form__label" for="subject">件名</label>
            <input class="form__text" id="subject" type="text" name="subject" value="subject">
            @error('subject')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label class="form__label--textarea" for="body">お問い合わせ本文</label>
            <textarea class="form__textarea" name="body" id="body">text</textarea>
            @error('body')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <button class="form__button" type="submit">送信</button>
        </form>
    </div>
@endsection
