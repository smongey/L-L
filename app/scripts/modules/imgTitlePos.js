define(['jquery', 'packery'], function() {


$(document).ready(function() {
        slideTitlePosition();
        $('#container').packery({
            itemSelector: '.item',
            stamp: ".stamp",
            gutter: 60
        });
        $('.item').each(function() {
            var thumbHeight = $(this).height();
            var projectTitle = $('.project-title');
            $(this).find('h3').css({
                'margin-top': ((thumbHeight / 2) - $(this).find('h3').height() - 10)
            })
        });
    });
    
    $(window).on('resize', function() {
        slideTitlePosition();
    });

    function slideTitlePosition() {
        var sliderHeight = $('#slider').height() / 2 - 30;
        var slideTitle = $('.slide-title');
        $(slideTitle).css({
            'margin-top': sliderHeight
        });
    }


});