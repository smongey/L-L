require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        raphael: '../bower_components/raphael/raphael',
        localScroll: "../bower_components/jquery.localScroll/jquery.localScroll",
        scrollTo: "../bower_components/jquery.scrollTo/jquery.scrollTo",
        swipe: '../bower_components/swipe/swipe',
        bridget: '../bower_components/jquery-bridget/jquery.bridget',
        packery: '../bower_components/packery/js/packery',
    },
    shim: {
        'localScroll': {
            deps: ['jquery', 'scrollTo'],
            exports: 'localScroll'
        },
        'scrollTo': {
            deps: ['jquery'],
            exports: 'scrollTo'
        }
    }
});
require(['jquery', 'raphael', 'localScroll', 'scrollTo', 'swipe', 'bridget', 'packery', 'modules/app', 'modules/slider', 'modules/nav', 'modules/scrollButton', 'modules/imgTitlePos'], 
	function($, raphael, localScroll, scrollTo, swipe, bridget, packery, app, slider, nav, scrollButton, imgTitlePos) {
    'use strict';


});