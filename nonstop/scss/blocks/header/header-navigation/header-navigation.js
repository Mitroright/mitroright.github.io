$(function() {

    // $('.header-navigation').addClass('header-navigation_sticky');

    if ($(window).scrollTop() > 160) {
        $('.header-navigation').addClass('header-navigation_sticky');
        $('.menu__pagination').show();
    } else {
        $('.header-navigation').removeClass('header-navigation_sticky');
        $('.menu__pagination').hide();
    }

    $(window).scroll(function () {

        if ($(this).scrollTop() > 160) {
            $('.header-navigation').addClass('header-navigation_sticky');
            $('.menu__pagination').show();
        } else {
            $('.menu__pagination').hide();
            $('.header-navigation').removeClass('header-navigation_sticky');
        }

    });

    $('.header-navigation-search__input').focus(function () {
        $('.header-navigation-search').addClass('header-navigation-search_wide');
        $('.header-navigation-menu').addClass('header-navigation-menu_hide');
        $('.header-navigation-search-fields').addClass('header-navigation-search-fields_active');
        $('.header-navigation-search').addClass('header-navigation-search_focus');
        $('.overlay').addClass('overlay_active');


        $('.header-navigation-catalog-item__headline').removeClass('header-navigation-catalog-item__headline_active');
        $('.header-navigation-catalog-item__headline').parent().find('div.header-navigation-catalog-item-submenu').removeClass('header-navigation-catalog-item-submenu_active');

        $('.header-navigation-catalog-item__headline').removeClass('header-navigation-catalog__button_focus');
        $('.header-navigation-catalog').removeClass('header-navigation-catalog_active');
    });
    $('.header-navigation-search__input').focusout(function () {
        $('.header-navigation-search').removeClass('header-navigation-search_wide');

        $('.header-navigation-menu').removeClass('header-navigation-menu_hide');
        $('.header-navigation-search-fields').removeClass('header-navigation-search-fields_active');
        $('.header-navigation-search').removeClass('header-navigation-search_focus');
        $('.overlay').removeClass('overlay_active');
    });

    $('.header-navigation-catalog__button').click(function () {

        if ($(this).hasClass('header-navigation-catalog__button_focus')) {
            $(this).removeClass('header-navigation-catalog__button_focus');
            $('.overlay').removeClass('overlay_active');
            $('.header-navigation-catalog').removeClass('header-navigation-catalog_active');
        } else {
            $(this).addClass('header-navigation-catalog__button_focus');
            $('.overlay').addClass('overlay_active');
            $('.header-navigation-catalog').addClass('header-navigation-catalog_active');
        }

    });

    $('.header-navigation-catalog-item__headline').on('click', function (event) {
        event.preventDefault();

        $('.header-navigation-catalog-item__headline').removeClass('header-navigation-catalog-item__headline_active');
        $('.header-navigation-catalog-item-submenu').removeClass('header-navigation-catalog-item-submenu_active');

        if ($(this).parent().find('div.header-navigation-catalog-item-submenu').hasClass('header-navigation-catalog-item-submenu_active')) {
            $(this).removeClass('header-navigation-catalog-item__headline_active');
            $(this).parent().find('div.header-navigation-catalog-item-submenu').removeClass('header-navigation-catalog-item-submenu_active');

            $(this).removeClass('header-navigation-catalog__button_focus');
            $('.overlay').removeClass('overlay_active');
            $('.header-navigation-catalog').removeClass('header-navigation-catalog_active');
        } else {
            $(this).addClass('header-navigation-catalog-item__headline_active');
            $(this).parent().find('div.header-navigation-catalog-item-submenu').addClass('header-navigation-catalog-item-submenu_active');
        }
    });

    $('.overlay').click(function () {

        if ($('.header-navigation-catalog__button').hasClass('header-navigation-catalog__button_focus')) {
            $(this).removeClass('header-navigation-catalog__button_focus');
            $('.overlay').removeClass('overlay_active');
            $('.header-navigation-catalog').removeClass('header-navigation-catalog_active');
        }

    });

    $('.header-mobile__button_search').click(function () {
        if ($(this).hasClass('header-mobile__button_search_active')) {
            $(this).removeClass('header-mobile__button_search_active');

            $('.header-navigation-search').removeClass('header-navigation-search_wide');

            $('.header-navigation-menu').removeClass('header-navigation-menu_hide');
            $('.header-navigation-search-fields').removeClass('header-navigation-search-fields_active');
            $('.header-navigation-search').removeClass('header-navigation-search_focus');
            $('.overlay').removeClass('overlay_active');
        } else {
            $(this).addClass('header-mobile__button_search_active');

            $('.header-navigation-search').addClass('header-navigation-search_wide');
            $('.header-navigation-menu').addClass('header-navigation-menu_hide');
            $('.header-navigation-search-fields').addClass('header-navigation-search-fields_active');
            $('.header-navigation-search').addClass('header-navigation-search_focus');
            $('.overlay').addClass('overlay_active');


            $('.header-navigation-catalog-item__headline').removeClass('header-navigation-catalog-item__headline_active');
            $('.header-navigation-catalog-item__headline').parent().find('div.header-navigation-catalog-item-submenu').removeClass('header-navigation-catalog-item-submenu_active');

            $('.header-navigation-catalog-item__headline').removeClass('header-navigation-catalog__button_focus');
            $('.header-navigation-catalog').removeClass('header-navigation-catalog_active');
        }
    });

});
