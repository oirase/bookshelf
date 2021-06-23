<div>
    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button  {{ $attributes }}　type="submit">ログアウト</button>
    </form>
</div>