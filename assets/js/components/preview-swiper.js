document.addEventListener("DOMContentLoaded", function () {

const swiper = new Swiper(".preview-swiper", {
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

document.querySelectorAll(".item-photo-list img").forEach((img, index, arr) => {
  img.addEventListener("click", () => {
    const preview = document.querySelector(".preview");
    preview.classList.add("open");
    swiper.slideTo(index % (arr.length / 2), 0);
  });
});

document.querySelector(".preview").addEventListener("click", (e) => {
  if (e.target.classList.contains("preview-bg")  || e.target.classList.contains("close-btn")) {
    e.currentTarget.classList.remove("open");
  }
  console.log(e.target);
});
});
