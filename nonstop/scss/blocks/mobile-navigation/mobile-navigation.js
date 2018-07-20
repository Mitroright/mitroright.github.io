$(function() {

    $('.mobile-navigation-list__headline').click(function () {

        if ($(this).parent().parent().hasClass('mobile-navigation-list_active')) {
            $(this).parent().parent().removeClass('mobile-navigation-list_active');
            $(this).parent().find('ul').slideUp(300);
        } else {
            $(this).parent().parent().addClass('mobile-navigation-list_active');
            $(this).parent().find('ul').slideDown(300);
        }

    });

});
