$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    var tl = anime.timeline();

    tl.add({
        targets: '.bg',
        opacity: 0,
        duration: 1500,
        easing: 'linear',
        complete: function() {
            window.location.href =  window.location.href + 'fitness';
        }
    });

    tl.add({
        targets: '.area-wrapper',
        opacity: 1,
        duration: 1500,
        easing: 'linear'
    })
});