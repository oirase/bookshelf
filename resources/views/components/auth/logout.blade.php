<div {{ $attributes }}>
    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button id="auth__button--logout"　type="submit">ログアウト</button>
    </form>
</div>
