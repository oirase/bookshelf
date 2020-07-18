<div class="form__wrapper"  {{ $attributes }}>
    <form class="form" method="POST" action="{{ route('register') }}" >
        @csrf
        <label class="form__label" for="name">{{ __('Name') }}</label>
        <input class="form__text @error('name') is-invalid @enderror" id="name" type="text" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
        @error('name')
            <span role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <label  class="form__label" for="email">{{ __('E-Mail Address') }}</label>
        <input class="form__text @error('email') is-invalid @enderror" id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email">
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <label class="form__label" for="password">{{ __('Password') }}</label>
        <input class="form__text @error('password') is-invalid @enderror" id="password" type="password" name="password" required autocomplete="new-password">
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        <label class="form__label" for="password-confirm">{{ __('Confirm Password') }}</label>
        <input class="form__text" id="password-confirm" type="password" name="password_confirmation" required autocomplete="new-password">
        <button class="form__button" type="submit">
            {{ __('Register') }}
        </button>
    </form>
</div>
