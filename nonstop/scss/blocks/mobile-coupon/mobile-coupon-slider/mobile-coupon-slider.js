$(function () {

    $('.mobile-coupon-slider').owlCarousel({
        items: 6,
        loop: false,
        dots: true,
        nav: false,
        margin: 32,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 2,
            },
            540: {
                items: 2,
            },
            973: {
                items: 6,
            },
            1016: {
                items: 6,
            },
            1215: {
                items: 6,
            }
        }
    });

});
