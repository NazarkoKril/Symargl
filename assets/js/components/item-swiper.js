document.addEventListener("DOMContentLoaded", function () {

const swiper = new Swiper(".item-swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
});