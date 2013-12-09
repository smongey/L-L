require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		raphael: '../bower_components/raphael/raphael',
		localScroll: "../bower_components/jquery.localScroll/jquery.localScroll",
		scrollTo: "../bower_components/jquery.scrollTo/jquery.scrollTo",
		swipe: '../bower_components/swipe/swipe',
		packery: '../bower_components/packery/'

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

require(['jquery', 'raphael', 'localScroll', 'scrollTo', 'swipe', 'modules/app', 'modules/slider', 'modules/nav', 'modules/scrollButton'], 
	function ($, raphael, localScroll, scrollTo, swipe, app, slider, nav, scrollButton) {
	'use strict';


			$(document).ready(function(){
					slideTitlePosition();

			});


			$(window).on('resize', function(){
						slideTitlePosition();
			});
					

			function slideTitlePosition() {
			var sliderHeight = $('#slider').height() / 2 -30;
			var slideTitle 	 = $('.slide-title');
			$(slideTitle).css({'margin-top' : sliderHeight});
			}


});

	