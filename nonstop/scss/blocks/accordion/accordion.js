$(function() {

    $('[data-target = "acc__characteristics"]').addClass('accordion__item_active');
    $('body').find('div#acc__characteristics').show();

    $('.accordion__item').click(function () {
        var targetContent = $(this).attr('data-target');
        $('.accordion__item').removeClass('accordion__item_active');
        $(this).addClass('accordion__item_active');
        $('.accordion__content').hide();
        $('body').find('div#' + targetContent).show();
    });

});
