define(['jquery'], function() {
    'use strict';
    $(window).on('scroll', function() {
        var scrolledFromTop = $(window).scrollTop();
        var mainNav = $('.main-nav');
        var container = $('#container');
        var scrollButton = $('a.top-button');
        if (scrolledFromTop > 10) {
            if (scrolledFromTop >= $('#slider').height()) {
                $(mainNav).removeClass('relative').addClass('fixed-top');
                // $(container).addClass('fixed-top');
                $(scrollButton).attr("href", "#top");

                var windowHeight = $(window).height();

                // $('.body-content').css({top: 82});



                // $('.body-wrap').css({position: 'absolute', width: '100%' top: 0});

                // $('.project-wrap').css({position: 'relative', top: windowHeight});

                $('.secondary-nav').css({position: 'fixed', top: 82}).fadeIn(300);

            } else {
                $(mainNav).addClass('relative').removeClass('fixed-top');
                $(container).removeClass('fixed-top');
                $(scrollButton).attr("href", "#body-content");
                
                $('.body-content').css({top: 0});

                $('.secondary-nav').css({position: 'relative', top: 0 }).fadeOut();

                $('.project-wrap').css({position: 'relative', top: 0});

            }
        } else {
            $(mainNav).removeClass('relative');
            $(scrollButton).attr("href", "#body-content");
        }
    });
});