$(window).on("load", function () {
  $("body").removeClass("overflow");
});

$(document).ready(function () {
  /************************************ Navbar ************************************/
  $(".menu-btn").click(function () {
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
    $(".overlay").fadeIn();
  });
  $(".menu-close,.overlay").click(function () {
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
    $(".overlay").fadeOut();
  });
  /************************************ Main Slider ************************************/
  let mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    autoplay: {
      delay: 10000,
    },
    spaceBetween: 23,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".main-slider .main-swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Top Deals Slider ************************************/
  let offersSwiper = new Swiper(".top_deals-slider .swiper", {
    a11y: {
      enabled: false,
    },
    // loop: true,
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 24,
      },
      992: {
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  /************************************ Lattest Coupons Sliders ************************************/
  let lattestFirstSwiper = new Swiper(".lattest_first-slider .swiper", {
    a11y: {
      enabled: false,
    },
    // loop: true,
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 24,
      },
      992: {
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".lattest_first-slider .swiper-btn-next",
      prevEl: ".lattest_first-slider .swiper-btn-prev",
    },
  });
  let lattestSecondSwiper = new Swiper(".lattest_second-slider .swiper", {
    a11y: {
      enabled: false,
    },
    // loop: true,
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 24,
      },
      992: {
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".lattest_second-slider .swiper-btn-next",
      prevEl: ".lattest_second-slider .swiper-btn-prev",
    },
  });
  /************************************ To Top ************************************/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".toTop").show();
    } else {
      $(".toTop").hide();
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
