@extends('layouts.app')

@push('meta')
    <link rel="canonical" href="{{ route('index') }}">
@endpush

@push('js')
    <script src="{{ asset('js/index.js') }}" defer></script>
    <script src="{{ asset('js/authView.js') }}" defer></script>
@endpush
        
@section('content')
    <div id="root"></div>
@endsection
