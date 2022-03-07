window.addEventListener('DOMContentLoaded', () => {
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
  (function slider() {
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
    const sliderEl = document.querySelector('.about__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 'auto',
    });
  })();

  // (function slider() {
  //   const sliderEl = document.querySelector('.el');
  //   new Swiper('.el', {
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // })();

  // // * ===== Custom select
  // (function customSelect() {
  //   const selects = document.querySelectorAll('.select');
  //   selects.forEach((el) => {
  //     const select = new Choices(el, {
  //       itemSelectText: '',
  //       searchEnabled: false,
  //     });
  //   });
  // })();

  // // * ===== Show Menu
  // (function showMenu() {
  //   const menuBtn = document.querySelector('.header__toggle');
  //   const menu = document.querySelector('.mobile-menu');
  //   const menuCloseBtn = document.querySelector('.mobile-menu__close');
  //   const body = document.querySelector('body');
  //   const overlay = document.querySelector('.overlay');

  //   menuBtn.addEventListener('click', (e) => {
  //     menu.classList.toggle('active');
  //     overlay.classList.toggle('active');
  //     body.classList.toggle('no-scroll');
  //   });

  //   overlay.addEventListener('click', (e) => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //   });

  //   menuCloseBtn.addEventListener('click', (e) => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //   });
  // })();

  // // * ===== Accordion
  // const toggleAccordion = (accordionControl, accordionContent, accordion) => {
  //   const filters = document.querySelectorAll(accordionControl);

  //   filters.forEach((el) => {
  //     el.addEventListener('click', (e) => {
  //       const target = e.target.closest(accordion);
  //       const content = target.querySelector(accordionContent);

  //       target.classList.toggle('active');

  //       if (target.classList.contains('active')) {
  //         content.style.maxHeight = content.scrollHeight + 'px';
  //       } else {
  //         content.style.maxHeight = null;
  //       }
  //     });
  //   });
  // };

  // toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // // * ===== Mixer
  // (function mixer() {
  //   const mixContent = document.querySelector('.mixer__content');
  //   if (mixContent) {
  //     const mixer = mixitup(mixContent);
  //   }
  // })();

  // // * ===== Modal
  // (function modals() {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelectorAll(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');

  //     if (modalEl) {
  //       openBtnEl.forEach((el) => {
  //         el.addEventListener('click', (e) => {
  //           if (e.target) {
  //             e.preventDefault();
  //           }

  //           modalEl.classList.add('active');
  //           body.classList.add('no-scroll');
  //         });
  //       });

  //       closeEl.forEach((btn) => {
  //         btn.addEventListener('click', (e) => {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         });
  //       });

  //       modalEl.addEventListener('click', (e) => {
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         }
  //       });
  //     }
  //   }
  //   bindModal('.download__btn', '.popup--download', '.popup__close');
  //   bindModal('.header__favorite', '.popup--card-object', '.popup__close');
  //   bindModal('.get-presentation', '.popup--get-info', '.popup__close');
  //   bindModal('.presentation__download', '.popup--get-info', '.popup__close');
  // })();

  // function rangeSlider() {
  //   const rangeSlider = document.querySelector('.range-slider');
  //   const sliderValueSum = document.querySelector(
  //     '.filter-block__slider-text--sum'
  //   );

  //   noUiSlider.create(rangeSlider, {
  //     start: [50000],
  //     range: {
  //       min: [10000],
  //       max: [100000],
  //     },
  //   });

  //   sliderValueSum.noUiSlider.on('update', function (values, handle) {
  //     sliderValueSum.innerHTML = values[handle];
  //   });
  // }
  // rangeSlider();

  // Initialise Carousel
  const mainCarousel = new Carousel(document.querySelector('.carousel'), {
    infinite: false,
    Navigation: false,
    Dots: false,
    center: true,
  });

  // Initialise Fancybox
  Fancybox.bind('[data-fancybox="instagram"]', {
    Carousel: {
      on: {
        change: (carousel, to) => {
          // Sync Carousel slide
          // ===
          const $el = Fancybox.getInstance()
            .getSlide()
            .$trigger.closest('.carousel__slide');

          const slide = mainCarousel.slides.find((slide) => {
            return slide.$el === $el;
          });

          mainCarousel.slideTo(slide.index, {
            friction: 0,
          });
        },
      },
    },
  });

  // const myCarousel = new Carousel(document.querySelector('.carousel'), {
  //   slidesPerPage: 'auto',
  // });

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
