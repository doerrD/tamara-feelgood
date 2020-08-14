$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    var tl = anime.timeline();

    tl.add({
        targets: '.bg',
        opacity: 0,
        duration: 1500,
        easing: 'linear'
    });

    tl.add({
        targets: '.area',
        opacity: 1,
        duration: 1500,
        easing: 'linear'
    })
});