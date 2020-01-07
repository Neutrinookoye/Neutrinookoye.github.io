(function ($) {
  "use strict";

  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

  new WOW().init();

  $(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    
});

$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  return false;
});

  $('.home-slider').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    dots:false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  })

  $('.review').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav:true,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
  });
})(jQuery);