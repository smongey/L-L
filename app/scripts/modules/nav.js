
define(['jquery'], function() {
	'use strict';

	$(window).on('scroll', function(){

		var scrolledFromTop = $(window).scrollTop();
		var	mainNav 		= $('.main-nav');
		var	container 		= $('#container');
		var scrollButton	= $('a.top-button');
		
		if ( scrolledFromTop > 10 ) {
			
			if (scrolledFromTop >= $('#slider').height()) {
				$(mainNav).removeClass('relative').addClass('fixed-top');

				$(container).addClass('fixed-top');
				$(scrollButton).attr("href", "#top");

			} else {
				$(mainNav).addClass('relative').removeClass('fixed-top');
				$(container).removeClass('fixed-top');
				$(scrollButton).attr("href", "#body-content"); 
				
			}

		} else {

			$(mainNav).removeClass('relative');
			$(scrollButton).attr("href", "#body-content"); 

		}

	});

});