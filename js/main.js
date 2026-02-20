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
  /************************************ Filter Icon ************************************/
  $(".filter-icon").click(function () {
    $(".store_archive-filters").toggleClass("active");
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
  /************************************ Countdown ************************************/
  const pad = (n) => String(n).padStart(2, "0");

  $(".countdown-timer").each(function () {
    const countdown = $(this);
    const targetDate = new Date(countdown.data("countdown")).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      let distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        countdown.find(".countdown-number").text("00");
        console.log("Countdown finished!");
        return;
      }

      const timeParts = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };

      for (const [unit, value] of Object.entries(timeParts)) {
        countdown
          .find(`.countdown-item.${unit} .countdown-number`)
          .text(pad(value));
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
  });

  /************************************ Black Firiday Articles ************************************/
  let BFSwiper = new Swiper(".black_friday-articles-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 30,
  });

  /************************************ Range Slider ************************************/
  $(function () {
    const $min = $("#minRange");
    const $max = $("#maxRange");
    const $range = $(".range");

    function update() {
      let minVal = parseInt($min.val());
      let maxVal = parseInt($max.val());

      if (minVal > maxVal) {
        [minVal, maxVal] = [maxVal, minVal];
      }

      $("#minVal").text(minVal);
      $("#maxVal").text(maxVal);

      const minPercent = (minVal / 100) * 100;
      const maxPercent = (maxVal / 100) * 100;

      $range.css({
        left: minPercent + "%",
        width: maxPercent - minPercent + "%",
      });
    }

    $min.on("input", update);
    $max.on("input", update);

    update();
  });

  /************************************ Fancybox ************************************/
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]");
  }
  /************************************ Testimonials Slider ************************************/
  let testimonialsSwiper = new Swiper(".testimonials_slider-content .swiper", {
    a11y: {
      enabled: false,
    },
    // loop: true,
    autoplay: {
      delay: 10000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".testimonials_slider-content .swiper-btn-next",
      prevEl: ".testimonials_slider-content .swiper-btn-prev",
    },
  });
  /************************************ Coupon Modal ************************************/
  $(".coupon_modal-descTrigger").click(function () {
    $(this)
      .toggleClass("active")
      .parents(".coupon_modal")
      .find(".coupon_modal-desc")
      .slideToggle("500");
  });
});
