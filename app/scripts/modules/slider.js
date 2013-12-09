define(['jquery', 'swipe'], function() {
	'use strict';


	$('.bg').css({'height': $(window).height()});

	$(window).resize(function(){

		if ($(window).width() < 720) {
		   	$('.bg').css({'height': 300});
		}
		else {
		    // console.log('more than 720');
		    $('.bg').css({'height': $(window).height()});
		}

		
	});


	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  startSlide: 0,
	  speed: 1000,
	  auto: 30000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {},
	  transitionEnd: function(index, elem) {}
	});


	function slideTitlePosition() {

			var sliderHeight = $('#slider').height() / 2 -30;
			var slideTitle 	 = $('.slide-title');
			$(slideTitle).css({'margin-top' : sliderHeight});

	}


});