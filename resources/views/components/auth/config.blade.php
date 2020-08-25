<div {{ $attributes->merge([ 'class' => 'form__wrapper' ]) }}>
    <form class="form" action="{{ route('user/update') }}" method="post">
        @csrf
        <button class="form__button--close" id="form--close">&#x2613;</button>
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
        <button class="form__button--delete" id="form__modal--open">アカウントを削除</button>
        <div class="form__modal" id="form__modal">
            <div class="form__modal__window">
                <p class="form__p">アカウント削除の確認です<br>
                    本棚を含み登録情報は全て削除されます<p>
                <p class="form__p">削除する場合は削除ボタンを<br>
                    取り消す場合はキャンセルボタンを押して下さい</p>
                <button class="form__button" id="form__modal--close">キャンセル</button>
                <button class="form__button--delete" type="submit" formaction="{{ route('user/delete') }}">削除</button>
            </div>
        </div>
    </form>
</div>
