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

require(['jquery', 'raphael', 'localScroll', 'scrollTo', 'swipe', 'bridget', 'packery', 'modules/app', 'modules/slider', 'modules/nav', 'modules/scrollButton'], 
	function ($, raphael, localScroll, scrollTo, swipe, bridget, packery, app, slider, nav, scrollButton) {
	'use strict';

	$(document).ready(function(){
		slideTitlePosition();

		$('#container').packery({
			  itemSelector: '.item',
			  stamp: ".stamp",
			  // columnWidth: ".grid-sizer",
			  gutter: 50
		});

		$('.item').each(function() {

			var thumbHeight = $(this).height();
			var projectTitle 	   = $('.project-title');

			$(this).find('h3').css({'margin-top': ( ( thumbHeight / 2 ) - $(this).find('h3').height() )  })

		});

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


	