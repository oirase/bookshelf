@extends('layouts.app')

@section('title')
    確認メール送信
@endsection

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush

@section('content')
        
    <div  class="form__wrapper">
        <form class="form" method="POST" action="{{ route('password.email') }}">
            @csrf
            <h3 class="form__header">{{ __('Reset Password') }}</h3>
            @if (session('status'))
            <p class="form__p" role="alert">
                {{ session('status') }}
            </p>
            @endif
            <label for="email" class="form__label">{{ __('E-Mail Address') }}</label>
            <input id="email" type="email" class="form__text" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <button type="submit" class="form__button">
                {{ __('Send Password Reset Link') }}
            </button>
            <a class="form__a" href="{{ route('index') }}">トップページ</a> 
        </form>
    </div>
@endsection
