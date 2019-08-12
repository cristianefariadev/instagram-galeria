var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
    get: 'user',
    userId: 8411780163,
    accessToken: '8411780163.aeeff59.d2604cb0ac724e0c8d71957e0edce600',
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