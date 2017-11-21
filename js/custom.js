/*  Theme Name: Mr.Akki - Personal Portfolio template
    Author: KGMThemes
    Author e-mail: kgmthemes@gmail.com
    Version: 1.0.0
    Created:September 2017
    File Description:Main JS file of the template
*/
(function($) {

    'use strict';

    

    function initNavbarStickey() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".sticky").addClass("darkheader");
            } else {
                $(".sticky").removeClass("darkheader");
            }
        });
    }

    function initSmoothLink() {
        $('.navigation-menu a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    function initNavbarToggler() {
        var scroll = $(window).scrollTop();

        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

    }


    function initMagnificPopup() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
                    // Will preload 0 - before current, and 1 after the current image 
            }
        });
    }

    function initPortfolioFilter() {
        //PORTFOLIO FILTER 
        var $container = $('.projects-wrapper');
        var $filter = $('#filter');
        // Initialize isotope 
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });
        // Filter items when filter link is clicked
        $filter.find('a').click(function() {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    animationDuration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
    }

    function initTestimonialSlider() {
        $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    }

    function initPreloader(){
        $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
                $('body').delay(350).css({
            'overflow': 'visible'
        });
    }

    function initScrollspy() {
      $("#navigation").scrollspy({ offset: 70 });
    }

    function init() {
        initNavbarStickey();
        initSmoothLink();
        initNavbarToggler();
        initMagnificPopup();
        initPortfolioFilter();
        initTestimonialSlider();
        initPreloader();
        initScrollspy();
    }
    init();

})(jQuery)