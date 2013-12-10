require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery-pjax',
        raphael: '../bower_components/raphael/raphael',
        localScroll: "../bower_components/jquery.localScroll/jquery.localScroll",
        scrollTo: "../bower_components/jquery.scrollTo/jquery.scrollTo",
        swipe: '../bower_components/swipe/swipe',
        bridget: '../bower_components/jquery-bridget/jquery.bridget',
        packery: '../bower_components/packery/js/packery',
        pjax:     '../bower_components/jquery-pjax/jquery.pjax'
    },
    shim: {
        'localScroll': {
            deps: ['jquery', 'scrollTo'],
            exports: 'localScroll'
        },
        'scrollTo': {
            deps: ['jquery'],
            exports: 'scrollTo'
        },
        'pjax': {
            deps: ['jquery'],
            exports: 'pjax'
        }
    }
});
require(['jquery', 'raphael', 'localScroll', 'scrollTo', 'swipe', 'bridget', 'packery', 'pjax', 'modules/app', 'modules/slider', 'modules/nav', 'modules/scrollButton', 'modules/imgTitlePos'], 
	function($, raphael, localScroll, scrollTo, swipe, bridget, packery, pjax, app, slider, nav, scrollButton, imgTitlePos) {
    'use strict';


    var duration = 400;
    $('a[data-pjax]').pjax('#page', { 
        fragment: '#page',
        duration: duration
    });


    $('#page').bind('pjax:start', function() { 
        $(this).fadeOut(duration); 
    }).bind('pjax:end', function() { 
        $(this).fadeIn(duration); 
    });

});