$(function() {

    $('.checkout-slider__container').owlCarousel({
        items: 3,
        loop: false,
        dots: false,
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
                items: 2,
            },
            1016: {
                items: 3,
            },
            1215: {
                items: 3,
            }
        }
    });

});