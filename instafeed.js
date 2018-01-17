var loadButton = document.getElementById('load-more');
var feed = new Instafeed({

    get: 'user',
    userId: 6925080228,
    accessToken: '6925080228.1677ed0.7542f8fec5484fb686e6187da4bf6d8f',
    target: 'instafeed',
    resolution: 'low_resolution',
    limit: 6,
    template: '<div class="single-image"><a href="{{link}}"><img src="{{image}}" title="{{caption}}"/></a></div>',
    after: function () {
        if (!this.hasNext()) {
            loadButton.setAttribute('disabled', 'disabled');
        }
    },

});
// bind the load more button
loadButton.addEventListener('click', function () {
    feed.next();
});

feed.run();