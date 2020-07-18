<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 62.5%;vertical-align: baseline;background: transparent;">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
        <title>title</title>
    </head>
    <body style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 1.6rem;vertical-align: baseline;background: transparent;line-height: 1;font-family: &quot;Helvetica Neue&quot;,
    Arial,
    &quot;Hiragino Kaku Gothic ProN&quot;,
    &quot;Hiragino Sans&quot;,
    Meiryo,
    sans-serif;min-height: auto;width: auto;">
     <header class="header" style="margin: 0;padding: 1.5rem 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: #FFCC00;display: block;color: #FFF;text-align: center;width: 100%">
        <a style="margin: 0;padding: 0;font-size: 100%;vertical-align: baseline;background: transparent;cursor: pointer;box-sizing: border-box;letter-spacing: 0.25rem;"><h1 class="h1" style="margin: 0 auto;padding: 0;border: 0;outline: 0;font-size: 3rem;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;font-family: Georgia, serif;position: relative;width: 24rem;text-align: center;color: #FFF;">title</h1></a>
    </header>
    <div class="content" style="margin: 0;padding: 2rem 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;box-sizing: border-box;letter-spacing: 0.25rem;text-align: center;">
        <p style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;box-sizing: border-box;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">お問い合わせありがとうございます</p>

        <p style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;box-sizing: border-box;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">お問い合わせ内容は下記をご確認下さい</p>

        <ul style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;list-style: none;">
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">お名前</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">{{ $data['name'] }}</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">メールアドレス</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">{{ $data['email'] }}</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">件名</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">{{ $data['subject'] }}</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">本文</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 0.25rem;margin-bottom: 2rem;text-align: center;">{{ $data['body'] }}</li>
        </ul>
        </div>
    <footer class="footer" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: #FFCC00;display: block;text-align: center;width: 100%;">
        <a href="{{ route('index') }}" style="margin: 0;padding: 2rem 0;font-size: 100%;vertical-align: baseline;background: transparent;cursor: pointer;box-sizing: border-box;letter-spacing: 0.25rem;display: block;">{{ route('index') }}</a>
    </footer>
    </body>
</html>
