<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 62.5%;vertical-align: baseline;background: transparent;">
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
  letter-spacing: 2px;
}

h2, h3 {
  font-weight: normal;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
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
  padding: 1.5rem 0;
}

h1 {
  font-size: 3rem;
  font-family: Georgia, serif;
  position: relative;
  width: 24rem;
  text-align: center;
  color: #FFF;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #FFF;
    position: absolute;
    bottom: 3px;
    left: 0;
  }

}

.content {
  padding: 2rem 0;
  text-align: center;
}

p, li {
  margin-bottom: 2rem;
  text-align: center;
}

.footer {
  height: 6rem;
  background: #FFCC00;
  text-align: center;

  &__a {
    padding: 2rem 0;
  }
}
        </style>
        <title>title</title>
    </head>
    <body style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 1.6rem;vertical-align: baseline;background: transparent;line-height: 1;font-family: &quot;Helvetica Neue&quot;,
    Arial,
    &quot;Hiragino Kaku Gothic ProN&quot;,
    &quot;Hiragino Sans&quot;,
    Meiryo,
    sans-serif;min-height: auto;width: auto;">
     <header class="header" style="margin: 0;padding: 1.5rem 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: #FFCC00;display: block;color: #FFF;">
        <a style="margin: 0;padding: 0;font-size: 100%;vertical-align: baseline;background: transparent;cursor: pointer;box-sizing: border-box;letter-spacing: 0.25rem;"><h1 class="h1" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 3rem;vertical-align: baseline;background: #FFF;letter-spacing: 0.25rem;font-family: Georgia, serif;position: absolute;width: 100%;text-align: center;color: #FFF;&: :after {
    content: &quot;&quot;;height: 1px;bottom: 3px;left: 0;">title</h1></a>
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
    <footer class="footer" style="margin: 0;padding: 0;border: 0;outline: 0;font-size: 100%;vertical-align: baseline;background: #FFCC00;display: block;height: 6rem;text-align: center;&__a {
    padding: 2rem 0;">
        <a href="{{ route('index') }}" style="margin: 0;padding: 0;font-size: 100%;vertical-align: baseline;background: transparent;cursor: pointer;box-sizing: border-box;letter-spacing: 0.25rem;">{{ route('index') }}</a>
    </footer>
    </body>
</html>
