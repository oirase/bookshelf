@extends('layouts.app')

@section('title')
    パスワードリセット
@endsection

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush

@section('content')
    <div  class="form__wrapper">
        <form class="form" method="POST" action="{{ route('password.update') }}">
            @csrf
            <input type="hidden" name="token" value="{{ $token }}">
            <label for="email" class="form__label">{{ __('E-Mail Address') }}</label>
            <input id="email" class="form__text" type="email" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
            @error('email')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label for="password" class="form__label">{{ __('Password') }}</label>
            <input id="password" type="password" class="form__text" name="password" required autocomplete="new-password">
            @error('password')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label for="password-confirm" class="form__label">{{ __('Confirm Password') }}</label>
            <input id="password-confirm" type="password" class="form__text" name="password_confirmation" required autocomplete="new-password">
            <button type="submit" class="form__button">
                {{ __('Reset Password') }}
            </button>
        </form>
    </div>
@endsection
