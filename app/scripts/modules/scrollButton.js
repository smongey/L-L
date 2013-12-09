
define(['jquery', 'scrollTo', 'localScroll'], function() {
	'use strict';

	$('a[href*=#]:not([href=#])').click(function() {

	  	var target = $(this.hash);

	  	if($('.main-nav').hasClass('fixed-top')) {

	  		$('html,body').animate({
	          scrollTop: 0
	    	}, 500);


	  	} else {

	  		$('html,body').animate({
	          scrollTop: target.offset().top
	    	}, 500);           

	  	}
	  
	    return false;
	 		
	});

});