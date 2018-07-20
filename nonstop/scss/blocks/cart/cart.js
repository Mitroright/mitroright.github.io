$(function() {

    $('.cart__select_left').click(function () {

        if (parseInt($(this).parent().find('input.cart__counter__input').val()) <= 0) {
            return 0;
        }

        $(this).parent().find('input.cart__counter__input').val(parseInt($(this).parent().find('input.cart__counter__input').val()) - 1);

    });

    $('.cart__select_right').click(function () {

        $(this).parent().find('input.cart__counter__input').val(parseInt($(this).parent().find('input.cart__counter__input').val()) + 1);

    });

    $('.cart_delivery__item').click(function () {
        $('.cart_delivery__item').removeClass('cart_delivery__item_active');
       $(this).addClass('cart_delivery__item_active');
    });

});
