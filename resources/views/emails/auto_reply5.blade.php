<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
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
  letter-spacing: 0.25rem;
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
    <body>
     <header class="header">
        <a><h1 class="h1">title</h1></a>
    </header>
    <div class="content">
        <p>お問い合わせありがとうございます</p>

        <p>お問い合わせ内容は下記をご確認下さい</p>

        <ul>
            <li>お名前</li>
            <li>{{ $data['name'] }}</li>
            <li>メールアドレス</li>
            <li>{{ $data['email'] }}</li>
            <li>件名</li>
            <li>{{ $data['subject'] }}</li>
            <li>本文</li>
            <li>{{ $data['body'] }}</li>
        </ul>
        </div>
    <footer class="footer">
        <a href="{{ route('index') }}">{{ route('index') }}</a>
    </footer>
    </body>
</html>
