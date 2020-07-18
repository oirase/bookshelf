@extends('layouts.app')

@section('title')
    お問い合わせ
@endsection
        
@section('content')
    <div class="form__wrapper--view-fit">
        <form class="form" method="POST" action="{{ route('complete') }}" >
            @csrf
            <label class="form__label" for="name">お名前</label>
            <input class="form__text @error('name') is-invalid @enderror" id="name" type="text" name="name" value="aaa" required autocomplete="name" autofocus>
            @error('name')
                <span role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
            <label  class="form__label" for="email">メールアドレス</label>
            <input class="form__text @error('email') is-invalid @enderror" id="email" type="email" name="email" value="mahoganyshelf@outlook.com" required autocomplete="email">
            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          <label class="form__label" for="subject">件名</label>
        <input class="form__text" id="subject" type="text" name="subject" value="subject">
             <label class="form__label--textarea" for="body">お問い合わせ本文</label>
             <textarea class="form__textarea" name="body" id="body">text</textarea>
            <button class="form__button" type="submit">送信</button>
        </form>
    </div>
@endsection
