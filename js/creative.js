/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
           // minFontSize: '35px',
           // maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });




    /*-------------------------------------------------------------------*/
    /*  Section - My Resume
     /*-------------------------------------------------------------------*/
    var resumeCollapse = function (){
        var ww = Math.max($(window).width(), window.innerWidth),
            workItem = $('.collapse:not(:first)', '#work'),
            educationItem = $('.collapse:not(:first)', '#education');

        if (ww < 768){
            workItem.collapse('show');
            educationItem.collapse('show');
        }
        else{
            workItem.collapse('hide');
            educationItem.collapse('hide');
        }
    };
    //
    // // Call resumeCollapse() when window is loaded.
    // $(window).smartload(function(){
    //     resumeCollapse();
    // });
    //
    // // Call resumeCollapse() when window is resized.
    // $(window).smartresize(function(){
    //     resumeCollapse();
    // });

    $('#education').find('.resume-item:not(:first)').each(function(i){
        var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
        element.css('opacity', 0).one('inview', function(isInView) {
            if (isInView){
                setTimeout(function(){
                    element.addClass('animated bounceInUp').css('opacity', 1);
                } , itemsDelay * (i * 2));
            }
        });
    });

    $('#work').find('.resume-item:not(:first)').each(function(i){
        var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
        element.css('opacity', 0).one('inview', function(isInView) {
            if (isInView){
                setTimeout(function(){
                    element.addClass('animated bounceInUp').css('opacity', 1);
                } , itemsDelay * (i * 2));
            }
        });
    });





})(jQuery); // End of use strict
