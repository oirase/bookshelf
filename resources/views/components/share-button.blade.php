<div class="share-button__wrapper">
    <div>
        <a href="https://twitter.com/share?url={{ $url }}"><img class="share-button" src="{{ asset('share/twitter.svg') }}"></a>
        <a href="https://getpocket.com/edit?url={{ $url }}&title=Bookshelf" rel="nofollow" rel="nofollow" target="_blank"><img class="share-button" src="{{ asset('share/pocket.svg') }}"></a>
        <a href="https://www.facebook.com/share.php?u={{ $url }}" rel="nofollow" target="_blank"><img class="share-button" src="{{ asset('share/facebook.svg') }}"></a>
    </div>
    <div>
        <a href="https://social-plugins.line.me/lineit/share?url={{ $url }}"><img class="share-button" src="{{ asset('share/line.svg') }}"></a>
        <a href='https://feedly.com/i/subscription/feed/{{ $url }}' target='blank' rel="nofollow"><img class="share-button" src="{{ asset('share/feedly.svg') }}"></a>
        <a href="https://b.hatena.ne.jp/add?mode=confirm&url={{ $url }}&title=Bookshelf" target="_blank" rel="nofollow"><img class="share-button" src="{{ asset('share/hatena.svg') }}"></a>
    </div>
</div>
