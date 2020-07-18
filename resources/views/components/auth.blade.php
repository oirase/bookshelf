<div id="auth" {{ $attributes }}>
    <div id="auth__menu">
        @guest
            <div id="auth__button--wrapper">
                <button id="auth__button--register">新規登録</button>
                <button id="auth__button--login">ログイン</button>
            </div>
        @else
            <x-auth.logout/>
        @endguest
    </div>
    @guest
        <x-auth.register id="auth__form--register" />
        <x-auth.login  id="auth__form--login" />
    @endguest
</div>
