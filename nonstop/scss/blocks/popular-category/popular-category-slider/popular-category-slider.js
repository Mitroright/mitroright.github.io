$(function () {

    $('.popular-category-slider').owlCarousel({
        items: 5,
        loop: false,
        dots: true,
        nav: true,
        navText: ['<img src="img/icons/icon-slider-left.svg" alt="left">', '<img src="img/icons/icon-slider-right.svg" alt="right">'],
        smartSpeed: 600,
        responsive: {
            0: {
                items: 2,
            },
            540: {
                items: 4,
            },
            973: {
                items: 6,
            },
            1016: {
                items: 4,
            },
            1215: {
                items: 5,
            }
        }
    });

});
