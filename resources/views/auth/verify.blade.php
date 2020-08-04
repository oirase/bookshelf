@extends('layouts.app')

@section('title')
    メール確認
@endsection

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush

@section('content')
    <div  class="form__wrapper"> 
        <form  class="form" method="POST" action="{{ route('verification.resend') }}">
            @csrf
            @if (session('resent'))
                <p class="form__p" role="alert">
                    {{ __('A fresh verification link has been sent to your email address.') }}
                </p>
            @endif
            <p class="form__p">{{ __('Before proceeding, please check your email for a verification link.') }}</p>
            <p class="form__p">{{ __('If you did not receive the email') }},</p>
            <button type="submit" class="form__button">{{ __('click here to request another') }}</button>
        </form>
    </div>
@endsection
