//back to top

/* Back to Top Scroll S */
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $('#back-top').show();
    } else {
        $('#back-top').hide();
    }
});
$('#back-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 2500);
    return false;
});
/* Back to Top Scroll E */



//scroll header

$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('header').addClass('fixed animated fadeInDown slow');
        $('.first-header').addClass('d-lg-none');
        $('.header-section').addClass('header-section-alternativecolor');
    } else {
        $('header').removeClass('fixed animated fadeInDown slow');
        $('.first-header').removeClass('d-lg-none');
        $('.header-section').removeClass('header-section-alternativecolor');
    }
});

/* Bootstrap Select S */

$(window).on("load resize", function() {

    var owl2 = $('.ourservices-slider.owl-carousel');
    owl2.owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1000,
        autoHeight: true,
        mouseDrag: true,
        navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                margin: 20,
            },
            1024: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 4,
            }
        }
    });
    var owl3 = $('.product-slider.owl-carousel');
    owl3.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1500,
        mouseDrag: true,
        navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
        responsive: {
            0: {
                items: 1,

            },
            568: {
                items: 1,


            },
            767: {
                items: 1,

            },

            991: {
                items: 1,

            },
            1200: {
                items: 2,
            }
        }
    });


    var owl4 = $('.testimonial-slider.owl-carousel');
    owl4.owlCarousel({
        margin: 20,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1500,
        mouseDrag: true,
        navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
        responsive: {
            0: {
                items: 1,

            },
            568: {
                items: 1,


            },
            767: {
                items: 1,

            },

            991: {
                items: 1,

            },
            1200: {
                items: 4,
            }
        }
    });

    var owl5 = $('.learning-outcomes.owl-carousel');
    owl5.owlCarousel({
        margin: 20,
        loop: true,
        nav: false,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1500,
        mouseDrag: true,
        navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
        responsive: {
            0: {
                items: 1,

            },
            568: {
                items: 1,


            },
            767: {
                items: 1,

            },

            991: {
                items: 1,

            },
            1200: {
                items: 1,
            }
        }
    });
});






// isotop S
$(window).on('load', function() {
    setTimeout(function() {
        $('.grid').isotope();
    }, 1000);
});
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});
// isotop E
// Wow animation S
$(document).ready(function() {
    new WOW({ mobile: false }).init();
});
// Wow animation E


// Slick slider S
$(document).ready(function() {
    $(".rtl-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".rtl-slider-nav"
    });
    $(".rtl-slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: ".rtl-slider",
        centerMode: false,
        focusOnSelect: true,
        prevArrow: ".thumb-prev",
        nextArrow: ".thumb-next"
    });
});



// Slick slider E