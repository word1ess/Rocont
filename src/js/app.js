import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function createAdaptiveSlider({
  slider,
  prevArrow,
  nextArrow,
  slides,
  breakpointsSlides,
  space = 0,
  isLoop = false,
  isCentered = false,
  paginationBlock = false,
  slidesPerGroup = 1,
  delay = false,
}) {
  const swiperInstance = new Swiper(slider, {
    spaceBetween: space,
    slidesPerView: slides,
    loop: isLoop,
    centeredSlides: isCentered,
    modules: [Navigation, Pagination, Autoplay],

    breakpoints: {
      321: {
        slidesPerView: breakpointsSlides[0],
        spaceBetween: space,
      },
      481: {
        slidesPerView: breakpointsSlides[1],
        spaceBetween: space,
      },
      641: {
        slidesPerView: breakpointsSlides[2],
        spaceBetween: space,
      },
      961: {
        slidesPerView: slides,
        spaceBetween: space,
      },
    },

    pagination: {
      el: paginationBlock,
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      prevEl: prevArrow,
      nextEl: nextArrow,
    },
    slidesPerGroup,
    autoplay: delay && {
      delay,
    },
  });

  return swiperInstance;
}
document.querySelector("._sub-intro__swiper") &&
  createAdaptiveSlider({
    slider: "._sub-intro__swiper",
    prevArrow: ".sub-intro__prev",
    nextArrow: ".sub-intro__next",
    slides: 3.5,
    space: 8,
    breakpointsSlides: [1.2, 1.8, 2.5, 2.8],
    isLoop: true,
  });

const headerBurger = document.querySelector(".header__burger");
const headerNavMenu = document.querySelector(".header__nav");

if (headerBurger) {
  headerBurger.onclick = () => {
    headerBurger.classList.toggle("burger-active");
    headerNavMenu?.classList.toggle("burger-active");
  };
}
