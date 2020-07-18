@extends('layouts.app')

@push('meta')
    <link rel="canonical" href="{{ route('index') }}">
@endpush

@auth
    @push('js')
        <script src="{{ asset('js/index.js') }}" defer></script>
        <script defer>console.log('auth')</script>
    @endpush
@else
    @push('js')
        <script src="{{ asset('js/index.js', true) }}" defer></script>
        <script src="{{ asset('js/authView.js', true) }}" defer></script>
        <script defer>console.log('guest')</script>
    @endpush
@endauth

        
@section('content')
    <div id="root"></div>
@endsection
