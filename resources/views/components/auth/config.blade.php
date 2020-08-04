<div {{ $attributes->merge([ 'class' => 'form__wrapper' ]) }}>
    <form class="form--large" action="{{ route('user/update') }}" method="post">
        @csrf
        <h3 class="form__header">登録情報の変更</h3>
        <p class="form__p">変更する項目を選んで新しい情報を入力し変更ボタンを押して下さい</p>
        <fieldset class="form__group">
            <legend>登録内容を変更</legend>
            <label class="form__label" for="newName">お名前</label>
            <input class="form__text "type="text" id="newName" name="newName" value="{{ $name }}">
            @error('newName')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label class="form__label" for="newMail">メールアドレス</label>
            <input class="form__text" type="email" id="newMail" name="newMail"  value="{{ $email }}">
            @error('newMail')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
            <label class="form__label" for="newPassword">新しいパスワード</label>
            <input class="form__text" type="password" id="newPassword" name="newPassword">
            @error('newPassword')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
        </fieldset>
        <p class="form__p">登録情報の変更、又はアカウントを削除する場合はパスワードを入力して下さい</p>
        <fieldset class="form__group">
            <legend>パスワードを入力して下さい</legend>
            <label class="form__label" for="password">パスワード</label>
            <input class="form__text" type="password" id="password" name="password">
            @error('password')
                <p class="form__error" role="alert">{{ $message }}</p>
            @enderror
        </fieldset>
        <button class="form__button" type="submit">登録情報を変更</button>
        <button class="form__button--delete" type="submit" formaction="{{ route('user/delete') }}">アカウントを削除</button>
    </form>
</div>
