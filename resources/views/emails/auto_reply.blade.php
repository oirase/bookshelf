<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>

html, body, div, span,
h1, h2, h3, p, ul, li,
footer, header, nav, section {
 margin:0;
 padding:0;
 border:0;
 outline:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}

body {
 line-height:1;
}

footer,header,nav,section {
 display:block;
}

ul {
 list-style:none;
}

a {
 margin:0;
 padding:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
 cursor: pointer;
}

div, img, label, p, a, button, input, textarea {
  box-sizing: border-box;
}

h1, h2, h3, p, a, li, button, label, input, div {
  letter-spacing: 3px;
}

h2, h3 {
  font-weight: normal;
}

body {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  min-height: 100vh;
  width: auto;
}

img {
  vertical-align: bottom;
}

body {
  min-height: auto;
}

header {
  color: #FFF;
  background: #FFCC00;
  padding: 20px 0;
  text-align: center;
}

h1 {
  font-size: 24px;
  font-family: Georgia, serif;
  position: relative;
  width: 240px;
  text-align: center;
  color: #FFF;
  text-align: center;
  margin: 0 auto;
}

h1::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #FFF;
    position: absolute;
    bottom: 3px;
    left: 0;
}

.content {
  padding: 20px 0;
  text-align: center;
}

p, li {
  margin-bottom: 20px;
  text-align: center;
}

.footer {
  background: #FFCC00;
  text-align: center;
  width: 100%;
}

.footer a {
    padding: 20px 0;
    display: block;

}
        </style>
        <title>title</title>
    </head>
    <body style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;line-height: 1;font-family: &quot;Helvetica Neue&quot;,
    Arial,
    &quot;Hiragino Kaku Gothic ProN&quot;,
    &quot;Hiragino Sans&quot;,
    Meiryo,
    sans-serif;min-height: auto;width: auto;">
     <header class="header" style="margin: 0;padding: 20px 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: #FFCC00;display: block;color: #FFF;text-align: center;">
        <a style="margin: 0;padding: 0;font-size: 100%;vertical-align: baseline;background: transparent;cursor: pointer;box-sizing: border-box;letter-spacing: 3px;"><h1 class="h1" style="margin: 0 auto;padding: 0;border: 0;outline: 0;font-size: 24px;vertical-align: baseline;background: transparent;letter-spacing: 3px;font-family: Georgia, serif;position: relative;width: 240px;text-align: center;color: #FFF;">title</h1></a>
    </header>
    <div class="content" style="margin: 0;padding: 20px 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;box-sizing: border-box;letter-spacing: 3px;text-align: center;">
        <p style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;box-sizing: border-box;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">お問い合わせありがとうございます</p>

        <p style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;box-sizing: border-box;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">お問い合わせ内容は下記をご確認下さい</p>

        <ul style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;list-style: none;">
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">お名前</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">{{ $data['name'] }}</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">メールアドレス</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">{{ $data['email'] }}</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">本文</li>
            <li style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: transparent;letter-spacing: 3px;margin-bottom: 20px;text-align: center;">{{ $data['body'] }}</li>
        </ul>
        </div>
    <footer class="footer" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: #FFCC00;display: block;text-align: center;width: 100%;">
        <a href="{{ route('index') }}" style="margin: 0;padding: 20px 0;font-size: 100%;vertical-align: baseline;background: transparent;cursor: pointer;box-sizing: border-box;letter-spacing: 3px;display: block;">{{ route('index') }}</a>
    </footer>
    </body>
</html>
