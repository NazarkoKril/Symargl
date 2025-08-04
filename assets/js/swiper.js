document.addEventListener("DOMContentLoaded", function () {
    new Swiper("#swiper", {
        slidesPerView: "auto", 
        spaceBetween: 10, 
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});