$(function () {

    $(".content-slider").each(function (index) {
        var items = $(this).attr('data-owl-items');
        $(this).owlCarousel({ // use $(this)
            items: items,
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
                    items: 4,
                },
                973: {
                    items: 6,
                },
                1016: {
                    items: items - 1,
                },
                1215: {
                    items: items,
                }
            }
        });
    });

});
