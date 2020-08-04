@extends('layouts.app')

@section('title')
    認証
@endsection

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush

@section('content')
    <div  class="form__wrapper">
        <form class="form" method="POST" action="{{ route('password.confirm') }}">
            @csrf
            <p class="form__header">{{ __('Confirm Password') }}</p>
            <p class="form__p">
                {{ __('Please confirm your password before continuing.') }}
            </p>
            <label for="password" class="form__label">{{ __('Password') }}</label>
            <input id="password" type="password" class="form__text" name="password" required autocomplete="current-password">
            @error('password')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <button type="submit" class="form__button">
                {{ __('Confirm Password') }}
            </button>
            @if (Route::has('password.request'))
                <a class="form__a" href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
            @endif
        </form>
    </div>
@endsection
