@extends('layouts.app')

@section('title')
    ログイン
@endsection

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush   

@section('content')
   <x-auth.login class="auth__form" id="auth__form--login" />
@endsection
