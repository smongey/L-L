require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery-pjax',
        raphael: '../bower_components/raphael/raphael',
        localScroll: "../bower_components/jquery.localScroll/jquery.localScroll",
        scrollTo: "../bower_components/jquery.scrollTo/jquery.scrollTo",
        swipe: '../bower_components/swipe/swipe',
        bridget: '../bower_components/jquery-bridget/jquery.bridget',
        packery: '../bower_components/packery/js/packery',
        pjax:     '../bower_components/jquery-pjax/jquery.pjax',
        imagesLoaded: '../bower_components/imagesloaded/imagesloaded'
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
require(['jquery', 'raphael', 'localScroll', 'scrollTo', 'swipe', 'bridget', 'packery', 'imagesLoaded', 'pjax', 'modules/app', 'modules/slider', 'modules/nav', 'modules/scrollButton', 'modules/slideTitle'], 
	function($, raphael, localScroll, scrollTo, swipe, bridget, packery, imagesLoaded, pjax, app, slider, nav, scrollButton, slideTitle) {
    'use strict';


// document ready

    $(document).ready(function() {
        // packery for images 
     $('#container').packery({
         itemSelector: '.item',
         stamp: ".stamp",
         gutter: 60
     });

        // position for large images titles
     $('.item').each(function() {
         var thumbHeight = $(this).height();
         var projectTitle = $('.project-title');
         $(this).find('h3').css({
             'margin-top': ((thumbHeight / 2) - $(this).find('h3').height() - 10)
         })
     });

     //  pjax
     var duration = 400;
     $('a[data-pjax]').pjax('#pjaxContainer', {
         fragment: '#pjaxContainer',
         duration: duration
     }).bind('click', function(e) {
         e.preventDefault();
     });


     // Scroll to top and down again
     $('a[href*=#]:not([href=#])').click(function() {
         var target = $(this.hash);
         if ($('#main-nav').hasClass('fixed-top')) {
             $('#header').css({
                 'margin-top': 0
             });
             $('#content').animate({
                 'margin-top': $(window).height()
             }, 1000);
         } else {
             $('html,body').animate({
                 scrollTop: target.offset().top + 1
             }, 500);
         }
         return false;
     });
 });

 //  on scroll
 $(window).on('scroll', function() {
     var mainNav = $('#main-nav');
     var pageOffset = window.pageYOffset;
     var elemHeight = $('#content').offset().top;
     if (pageOffset > elemHeight) {
         console.log('yep');

         // Knocks of scroll and resize of top banner (resize causes problems if not switch off)
         $(window).off('scroll');
         $(window).off('resize');
         
         // Functions for show nav at top on scroll and changing up/down button
         showNavTop();

         $('#header').animate({
             'margin-top': -($(window).height())
         }, 0);
         $('#content').addClass('top').animate({
             'margin-top': 0
         }, 0, function() {
             $(window).scrollTo(0, 0);
         });
     } else if ($(window).scrollTop() > 10) { // if my body scrolls more than 10 give my main nav a relative position
         $(mainNav).addClass('relative');
     } else {
         $(mainNav).removeClass('relative');
     }
 });
 // pjax bind
 var duration = 400;
 $('#pjaxContainer').bind('pjax:start', function() {
     $(this).fadeOut(duration);
     $('#secondary-nav').fadeOut();
 }).bind('pjax:end', function() {
     $(this).fadeIn(duration);
 });
 // document on
 $(document).on('pjax:success', function() {

    // packery doesn't work on reload
     $('.item').hide();
     $('#secondary-nav').addClass('inline').fadeIn();
     // initialize Packery after all images have loaded
     setTimeout(function() {
         $('#container').packery({
             itemSelector: '.item',
             stamp: ".stamp",
             gutter: 60,
         });
         $(window).trigger('resize');
         $('.item').show();
     }, 1000);
 });

 function showNavTop() {
     $('#main-nav').removeClass('relative').addClass('fixed-top');
     $('#secondary-nav').css({
         position: 'fixed',
         top: 82
     }).fadeIn(300);
     $('a.top-button').fadeOut(function() {
         $(this).text('Top').fadeIn().attr('href', '#down');
     })
 }


});