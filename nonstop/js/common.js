$(function() {

    $('.hamburger').click(function () {
        $('.mobile-menu').show();
    });

    $('.close--button').click(function () {
        $('.mobile-menu').hide();
    });

    $('.mfp-button').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.mask_phone').mask('+ 7 (999) 999-99-99');

    $('.input__close').click(function () {
       $(this).parent().find('input').val('');
    });

    $(window).scroll(function () {

        var windowhHeight = $(window).scrollTop();

        if (windowhHeight > 1500) {
            $('.scroll-top').addClass('scroll-top_active');
        } else {
            $('.scroll-top').removeClass('scroll-top_active');
        }

    });

    $('.scroll-top, .header-mobile__button_show').click(function () {
        $("html, body").stop().animate({scrollTop:0}, 1500, 'swing', function() {
            $(window).scrollTop(0);
        });
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function (event, ui) {
            $("#filter-price-in").val(+ ui.values[0]);
            $("#filter-price-out").val(+ ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    $('.filter-item__headline').click(function () {

        if ($(this).parent().hasClass('filter-item_active')) {

            $(this).parent().removeClass('filter-item_active');
            $(this).parent().find('div.filter-content').slideUp(300);

        } else {

            $(this).parent().addClass('filter-item_active');
            $(this).parent().find('div.filter-content').slideDown(300);
        }

    });

    $('.more-text').hide();

    $('.more-text__button').click(function (e) {
        e.preventDefault();
        $(this).parent().find('div.more-text').slideDown(300);
        $(this).hide();
    });

    $('.catalog__more').click(function (e) {
        e.preventDefault();
        $('.catalog__more_wrapper').slideDown(300);
    });

    $('.cart-type-id').hide();

    $('.type__item').click(function () {
        $('.type__item').removeClass('type__item_active');
        $(this).addClass('type__item_active');
        $('.cart-type-id').hide();
        $('.' + $(this).attr('data-type')).show();
    });

    $('.documents-wrapper').jScrollPane();

});
