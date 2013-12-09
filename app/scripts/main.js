require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        raphael: '../bower_components/raphael/raphael',
        swipe: '../bower_components/swipe/swipe'
	    },
	    shim: {
	    'localScroll': {
	        deps: ['jquery', 'scrollTo'],
	        exports: 'localScroll'
	    }
	}
});

require(['jquery', 'raphael', 'swipe', 'modules/app', 'modules/slider'], 
	function ($, raphael, swipe, app, slider) {
    'use strict';


    $(document).ready(function(){

 

        $('.project-image img').each(function(){
  
        var minus =  $(this).height();
        var margin =  minus / 2;


        $(this).css('margin-top', '50%');
        $(this).css('top', -margin);


        });

   

    });


});
