import $ from "jquery";
// меню бургер
export function burger() {
  $(document).ready(function () {
    $(".header__burger").click(function name(event) {
      $(".header__burger,.header__menu").toggleClass("burger-active");
    });
  });
}

// подвал
export function footer() {
  if (window.screen.width < 992) {
    $(document).ready(function () {
      $(".block__title").click(function name(event) {
        $(this).toggleClass("footer-active").next().slideToggle(300);
      });
    });
  }
}
