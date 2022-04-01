window.addEventListener('DOMContentLoaded', () => {
  // function carouselInstagram() {
  //   // Initialise Carousel
  //   const myCarousel = document.querySelector('.carousel');
  //   if (myCarousel) {
  //     const mainCarousel = new Carousel(myCarousel, {
  //       infinite: false,
  //       Navigation: false,
  //       Dots: false,
  //       center: true,
  //     });

  //     // Initialise Fancybox
  //     Fancybox.bind('[data-fancybox="instagram"]', {
  //       Carousel: {
  //         on: {
  //           change: (carousel, to) => {
  //             const $el = Fancybox.getInstance()
  //               .getSlide()
  //               .$trigger.closest('.carousel__slide');

  //             const slide = mainCarousel.slides.find((slide) => {
  //               return slide.$el === $el;
  //             });

  //             mainCarousel.slideTo(slide.index, {
  //               friction: 0,
  //             });
  //           },
  //         },
  //       },
  //     });
  //   }
  // }
  // carouselInstagram();

  function rangeSliderSum() {
    const rangeSlider = document.querySelector('.range-slider__range');
    const sliderValueSum = document.querySelector(
      '.range-slider--sum .range-slider__value'
    );

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [50000],
        range: {
          min: [10000],
          max: [100000],
        },
        connect: [true, false],
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ₽',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        if (values) {
          sliderValueSum.innerHTML = values[handle];
        }
      });
    }
  }

  rangeSliderSum();
  (function rangeSliderTime() {
    const rangeSlider = document.querySelector(
      '.range-slider--time .range-slider__range'
    );
    const sliderValueTime = document.querySelector(
      '.range-slider--time .range-slider__value'
    );

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [6],
        range: {
          min: [1],
          max: [12],
        },
        connect: [true, false],
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' мес.',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        if (values) {
          sliderValueTime.innerHTML = values[handle];
        }
      });
    }
  })();

  (function rangeSliderPercent() {
    const rangeSlider = document.querySelector(
      '.range-slider--percent .range-slider__range'
    );
    const sliderValuePercent = document.querySelector(
      '.range-slider--percent .range-slider__value'
    );

    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [7],
        range: {
          min: [1],
          max: [20],
        },
        connect: [true, false],
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' %',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        if (values) {
          sliderValuePercent.innerHTML = values[handle];
        }
      });
    }
  })();

  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  $('.input-data').mask('99-99-99');
  $('.input-time').mask('99-99');

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Mixer
  (function mixer() {
    const mixContent = document.querySelector('.team__content');
    if (mixContent) {
      const mixer = mixitup(mixContent);
    }
  })();
  // * ===== Slider
  (function sliderHero() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      slidesPerView: 'auto',
      spaceBetween: 17,
    });
  })();
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 'auto',
      spaceBetween: 30,
      breakpoints: {
        315: { spaceBetween: 10 },
        767: { spaceBetween: 20 },
        991: { spaceBetween: 30 },
      },
    });
  })();

  (function sliderReviewsVideo() {
    const sliderEl = document.querySelector('.reviews-video__slider');
    new Swiper(sliderEl, {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 'auto',
      spaceBetween: 17,
    });
  })();

  (function sliderAbout() {
    const parentEl = document.querySelector('.about__preview');
    const sliderEl = document.querySelector('.about__slider');
    if (sliderEl) {
      new Swiper(sliderEl, {
        navigation: {
          nextEl: parentEl.querySelector('.swiper-button-next'),
          prevEl: parentEl.querySelector('.swiper-button-prev'),
        },

        slidesPerView: 'auto',
      });
    }
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };

  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    if (header) {
      hideTabContent();
      showTabContent();

      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }

      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.news__tabs', '.news__btn', '.news__list', 'news__btn--active');
  someTabs(
    '.book-reviews__tabs',
    '.book-reviews__btn',
    '.book-reviews__list',
    'book-reviews__btn--active'
  );
});
