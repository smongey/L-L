
define(['jquery'], function() {
	'use strict';

	$(window).on('scroll', function(){

		var scrolledFromTop = $(window).scrollTop();
		var	mainNav 		= $('.main-nav');
		var	secondaryNav 	= $('.secondary-nav');
		var scrollButton	= $('a.top-button');
		
		if ( scrolledFromTop > 10 ) {
			
			if (scrolledFromTop >= $('#slider').height()) {
				$(mainNav).removeClass('relative').addClass('fixed-top');

				$(secondaryNav).addClass('fixed-top');
				$(scrollButton).attr("href", "#top");

			} else {
				$(mainNav).addClass('relative').removeClass('fixed-top');
				$(secondaryNav).removeClass('fixed-top');
				$(scrollButton).attr("href", "#body-content"); 
				
			}

		} else {

			$(mainNav).removeClass('relative');
			$(scrollButton).attr("href", "#body-content"); 

		}

	});

});