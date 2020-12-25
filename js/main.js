$(document).ready(function () {
  // Start WOW Library
  new WOW().init();
  // End WOW Library
  $('.back-to-top').hide();
  // Start Navbar background white
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass("active"); //
    } else if ($(this).scrollTop() > 1) {
      $('.navbar').removeClass('active');
    }
  });
  if ($(window).width() <= 974) {
    $('.navbar').addClass('mobile')
  } else {
    $('.navbar').removeClass('mobile');
  }
  $(window).on('resize', function () {
    if ($(window).width() <= 974) {
      $('.navbar').addClass('mobile')
    } else if ($(window).width() != 991) {
      $('.navbar').removeClass('mobile');
    }
  });

  // End  Navbar background white

  // Start Counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  // End Counter

  // Start portfolio
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $(".portfolio ul li").on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
    // End Portfolio
  });

  // Start Smooth Scroll to a Section
  $(function () {
    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200, );
        return false;
      }
    });
  });
  // End Smooth Scroll to a Section

  // Start ScrollTop
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 200) {
        $('.back-to-top').stop().fadeIn(300); // show the button
      } else {
        $('.back-to-top').stop().fadeOut(200); // hide the button
      }
    });
  });

  $(function () {
    $(".back-to-top").on("click", function () {
      $("html, body").animate({
        scrollTop: 0,
      }, 400);
    });
  });

  // End scrollTop

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".navbar-nav ul li").addClass('active');
      }
    });
  });
});