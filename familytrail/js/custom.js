/*================================================
[  Table of contents  ]
================================================

::  pre loader
::  Back to top
::  Accordion
::  Magnific Popup
::  countdown
::  owl-carousel
::  widget
::  counter
::  Tab Mobile
::  Force a hover to see the effect
::  Wow Animation
::  Nav bar Active

======================================
[ End table content ]
======================================*/

"use strict";


/*************************
    pre loader
*************************/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay(3).fadeOut();

}


/*************************
  Back to top
*************************/
function backtotop() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}

/*************************
      Silder
*************************/

/* Demo Scripts for Bootstrap Carousel and Animate.css article
 * on SitePoint by Maria Antonietta Perna
 */
function silder() {

    (function($) {
        //Function to animate slider captions 
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';

            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load 
        var $myCarousel = $('#carousel-example-generic'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $myCarousel.carousel();

        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);

        //Pause carousel  
        $myCarousel.carousel('pause');


        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });

    })(jQuery);

}

/*************************
      Accordion
*************************/
function accordion() {
    var $acpanel = $(".iq-accordion .iq-ad-block > .ad-details"),
        $acsnav = $(".iq-accordion .iq-ad-block > .ad-title");

    $acpanel.hide().first().slideDown("easeOutExpo");
    $acsnav.first().addClass("ad-active");
    $acsnav.on('click', function() {
        var $this = $(this).next(".ad-details");
        $acsnav.parent().removeClass("ad-active");
        $(this).parent().addClass("ad-active");
        $acpanel.not($this).slideUp("easeInExpo");
        $(this).next().slideDown("easeOutExpo");
        return false;
    });

}

/*************************
       Magnific Popup
*************************/

function popupgallery() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}


/*************************
       countdown
*************************/
function countdown1() {
    $('#countdown').countdown({
        date: '10/01/2018 23:59:59',
        offset: -8,
        day: 'Day',
        days: 'Days'
    }, function() {
        alert('Done!');
    });
}

/*************************
       owl-carousel 
*************************/
function owlcarousel() {
    $(".owl-carousel").each(function() {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 15;
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
                0: {
                    items: $this.data('xx-items') ? $this.data('xx-items') : 1
                },
                600: {
                    items: $this.data('xs-items') ? $this.data('xs-items') : 1
                },
                767: {
                    items: $this.data('sm-items') ? $this.data('sm-items') : 2
                },
                992: {
                    items: $this.data('md-items') ? $this.data('md-items') : 2
                },
                1190: {
                    items: $this.data('lg-items') ? $this.data('lg-items') : 3
                },
                1200: {
                    items: $items
                }
            },
            dots: $navdots,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],            
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

    });

}


/*************************
    widget
*************************/
function widget() {
    $('.iq-widget-menu > ul > li > a').on('click', function() {
        var checkElement = $(this).next();
        $('.iq-widget-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.iq-widget-menu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length === 0) {
            return true;
        } else {
            return false;
        }
    });
}


/*************************
       counter
*************************/

function counter() {
    $('.timer').countTo();
}

/*************************
       Tab Mobile
*************************/
function tabbar() {
    $('.fadeInLeft').on('click', function() {
        $('.fadeInRight').removeClass('active');

    });
    $('.fadeInRight').on('click', function() {
        $('.fadeInLeft').removeClass('active');

    });
}

/*************************
    Force a hover to see the effect
*************************/
function hovereffect() {
    // Force a hover to see the effect
    var share = document.querySelector('.share');
    setTimeout(function() {
        share.classList.add("hover");
    }, 1000);
    setTimeout(function() {
        share.classList.remove("hover");
    }, 3000);
}


/*************************
  Wow Animation
*************************/
/*function wowanimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
}*/

/*************************
  Nav bar Active
*************************/
function navbar() {
    $(function() {
        // Cache selectors
        var lastId,
            topMenu = $("#top-menu"),
            topMenuHeight = topMenu.outerHeight() + 15,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function() {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.on('click', function() {

            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({

                scrollTop: offsetTop
            }, 1500);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function() {
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#" + id + "']").parent().addClass("active");
            }
        });
    });
}


$(document).ready(function() {
    preloader(),
        backtotop(),
        navbar(),
        popupgallery(),
        hovereffect(),
        owlcarousel(),
        accordion(),
        countdown1(),
        tabbar(),
        widget(),
        counter();
});


$(window).on('load', function() {
    silder(),
        wowanimation();



});