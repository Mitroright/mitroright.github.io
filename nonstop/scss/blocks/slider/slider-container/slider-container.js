$(function() {

    $('.slider-container').owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        nav: true,
        navText: ['<img src="img/icons/icon-slider-left.svg" alt="left">', '<img src="img/icons/icon-slider-right.svg" alt="right">'],
        smartSpeed: 900
    });

});
