var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
    get: 'user',
    userId: 8411780163,
    accessToken: '8411780163.1677ed0.a79587546f4d44938e26a004c8747d9a',
    target: 'instafeed',
    resolution: 'standard_resolution',
    limit: 6,
    template: '<div class="single-image"><a href="{{link}}"><img src="{{image}}" title="{{caption}}"/></a></div>',
    after: function () {
        if (!this.hasNext()) {
            loadButton.setAttribute('disabled', 'disabled');
        }
    },
});
loadButton.addEventListener('click', function () {
    feed.next();
});
feed.run();