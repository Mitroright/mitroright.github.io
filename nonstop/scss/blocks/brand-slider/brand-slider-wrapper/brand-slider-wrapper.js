$(function() {

    $('.brand-slider-wrapper').owlCarousel({
        items: 6,
        loop: false,
        dots: true,
        nav: true,
        mouseDrag: false,
        // autoWidth: true,
        navText: ['<img src="img/icons/icon-slider-left.svg" alt="left">', '<img src="img/icons/icon-slider-right.svg" alt="right">'],
        smartSpeed: 400,
        responsive: {
            0: {
                items: 2,
            },
            540: {
                items: 6,
            },
            1016: {
                items: 5,
            },
            1215: {
                items: 6,
            }
        }
    });

});
