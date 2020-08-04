@extends('layouts.app')

@section('title')
    新規登録
@endsection

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush    

@section('content')
   <x-auth.register class="auth__form" id="auth__form--register" />
@endsection
