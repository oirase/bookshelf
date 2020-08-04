<div class="auth" id="auth" {{ $attributes }}>

    <div class="auth__menu">
        @guest
            <div class="auth__button--wrapper">
                <button class="auth__button" id="auth__button--register">新規登録</button>
                <button class="auth__button" id="auth__button--login">ログイン</button>
            </div>
        @else
            <div class="auth__button--wrapper">
                <x-auth.logout class="auth__button"/>
                <button class="auth__button" id="auth__button--config">設定</button>
            </div>
        @endguest
    </div>
    @if($notice !== '')
        <p class="auth__notice">{{ $notice }}</p>
    @endif
    @guest
        <x-auth.register class="auth__form" id="auth__form--register" />
        <x-auth.login class="auth__form" id="auth__form--login" />
    @else
        <x-auth.config class="auth__form" id="auth__form--config" :name="$user->name" :email="$user->email" />
    @endguest
</div>
