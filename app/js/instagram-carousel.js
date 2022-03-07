// function fancyBox() {
// Initialise Carousel
// const myCarousel = document.querySelector('.carousel');
// if (myCarousel) {
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
// }
// }
// fancyBox();
