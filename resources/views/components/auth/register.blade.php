<div {{ $attributes->merge([ 'class' => 'form__wrapper' ]) }}>
    <form class="form" method="POST" action="{{ route('register') }}" >
        @csrf
        <button class="form__button--close">&#x2613;</button>
        <label class="form__label" for="name">{{ __('Name') }}</label>
        <input value="aaa" class="form__text @error('name') is-invalid @enderror" id="name" type="text" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
        @error('name', 'register')
            <p class="form__error" role="alert">{{ $errors->register->first('name') }}</p>
        @enderror
        <label  class="form__label" for="email">{{ __('E-Mail Address') }}</label>
        <input value="aaa@aa.aa" class="form__text @error('email') is-invalid @enderror" id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email">
        @error('email', 'register')
            <p class="form__error" role="alert">{{ $errors->register->first('email') }}</p>
        @enderror
        <label class="form__label" for="password">{{ __('Password') }}</label>
        <input value="aaaabbbb" class="form__text @error('password') is-invalid @enderror" id="password" type="password" name="password" required autocomplete="new-password">
        @error('password', 'register')
            <p class="form__error" role="alert">{{ $errors->register->first('password') }}</p>
        @enderror
        <label class="form__label" for="password-confirm">{{ __('Confirm Password') }}</label>
        <input value="aaaabbbb" class="form__text" id="password-confirm" type="password" name="password_confirmation" required autocomplete="new-password">
        <button class="form__button" type="submit">
            {{ __('Register') }}
        </button>
    </form>
</div>
