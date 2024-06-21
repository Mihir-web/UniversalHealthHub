// Wow animation S
$(document).ready(function() {
    new WOW().init();
});
// Wow animation E


$(document).ready(function() {
    // When the carousel slide changes, update the tabs
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
      var tabIndex = $(e.relatedTarget).index();
      $('#ServicesTabContent div').removeClass('active');
      $('#ServicesTabContent div').eq(tabIndex).addClass('active');
      $('.services-tab-pane').removeClass('show active');
      $('.services-tab-pane').eq(tabIndex).addClass('show active');
    });

    // When a tab is clicked, update the carousel
    $('#custom-indicators button').on('click', function (e) {
      e.preventDefault();
      var tabIndex = $(this).parent().index();
      $('#carouselExampleIndicators').carousel(tabIndex);
    });
  });


  var owl1 = $('.testimonial-section-slider.owl-carousel');
owl1.owlCarousel({
// margin: 20,
loop: true,
// nav: true,
dots: false,
lazyLoad: true,
// autoplay: true,
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


var owl2 = $('.clients-carousel.owl-carousel');
owl2.owlCarousel({
// margin: 20,
loop: true,
// nav: true,
dots: false,
lazyLoad: true,
// autoplay: true,
smartSpeed: 1500,
mouseDrag: true,
navText: ["<i class='icon-down-long' title='Previous'></i>", "<i class='icon-down-long' title='Next'></i>"],
responsive: {
    0: {
        items: 1,

    },
    568: {
        items: 2,


    },
    767: {
        items: 4,

    },

    991: {
        items: 5,

    },
    1200: {
        items: 6,
    }
}
});

var owl5 = $('.testimonial-section-slider.owl-carousel');
    owl5.owlCarousel({
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
                items: 2,
            }
        }
    });