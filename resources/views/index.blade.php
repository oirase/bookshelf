@extends('layouts.app')

@push('meta')
    <link rel="canonical" href="{{ route('index') }}">
@endpush

@auth
    @push('js')
        <script src="{{ asset('js/auth.js') }}" defer></script>
        <script src="{{ asset('js/authView.js') }}" defer></script>
    @endpush
@else
    @push('js')
        <script src="{{ asset('js/gest.js') }}" defer></script>
        <script src="{{ asset('js/authView.js') }}" defer></script>
    @endpush
@endauth

@section('content')
    <div id="root"></div>
@endsection
