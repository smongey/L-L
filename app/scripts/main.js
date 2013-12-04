require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        raphael: '../bower_components/raphael/raphael',
        scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo',
        localScroll: '../bower_components/jquery.localScroll/jquery.localScroll'
	    },
	    shim: {
	    'localScroll': {
	        deps: ['jquery', 'scrollTo'],
	        exports: 'localScroll'
	    }
	}
});

require(['modules/app', 'jquery', 'localScroll'], function (app, $, localScroll) {
    'use strict';

	console.log('main file loaded');

});
