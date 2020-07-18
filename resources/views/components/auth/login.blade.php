<div class="form__wrapper"  {{ $attributes }}> 
    <form class="form" method="POST" action="{{ route('login') }}">
        @csrf
        <label class="form__label" for="email" >{{ __('E-Mail Address') }}</label>
        <input class="form__text @error('email') is-invalid @enderror" id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
        @error('email')
            <span role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <label class="form__label" for="password" >{{ __('Password') }}</label>
        <input class="form__text @error('password') is-invalid @enderror" id="password" type="password"  name="password" required autocomplete="current-password">
        @error('password')
            <span role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <input class="form__checkbox" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
        <label class="form__label--checkbox" for="remember">
            {{ __('Remember Me') }}
        </label>
        <button class="form__button" type="submit" >
            {{ __('Login') }}
        </button>
        @if (Route::has('password.request'))
            <a class="form__a" href="{{ route('password.request') }}">
                {{ __('Forgot Your Password?') }}
            </a>
        @endif
    </form>
</div>
