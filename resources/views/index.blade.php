@extends('layouts.app')

@push('meta')
    <link rel="canonical" href="{{ route('index') }}">
    <link rel="manifest" href="{{ asset('manifest.json') }}">
@endpush
@push('js')
        <script src="{{ asset('js/app.js') }}" defer></script>
@endpush
@auth
    @push('js')
        <script src="{{ asset('js/auth.js') }}" defer></script>
    @endpush
@else
    @push('js')
        <script src="{{ asset('js/gest.js') }}" defer></script>
    @endpush
@endauth

@push('js')
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush

@section('content')
    <div id="root"></div>
@endsection
