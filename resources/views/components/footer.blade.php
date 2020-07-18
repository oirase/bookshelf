<footer {{ $attributes }}>
    @php
        $route = Route::currentRouteName();
    @endphp
    @if($route == 'contact' || $route == 'complete')
        <a href="{{ route('index') }}">トップページ</a>
    @else
        <a href="{{ route('contact') }}">お問い合わせ</a>
    @endif
</footer>
