@extends('layouts.app')

@push('meta')
    <link rel="canonical" href="{{ route('index') }}">
@endpush

@auth
    @push('js')
        <script src="{{ asset('js/index.js') }}" defer></script>
        <script src="{{ asset('js/authView.js') }}" defer></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    @endpush
@else
    @push('js')
        <script src="{{ asset('js/index.js') }}" defer></script>
        <script src="{{ asset('js/authView.js') }}" defer></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    @endpush
@endauth

@section('content')
    <div id="root"></div>
@endsection
