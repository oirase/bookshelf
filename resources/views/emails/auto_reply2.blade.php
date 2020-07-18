@extends('layouts.mail')

@section('content')
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
@endsection
