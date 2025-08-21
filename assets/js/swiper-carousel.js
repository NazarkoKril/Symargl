document.addEventListener("DOMContentLoaded", function () {
    let direction = 1; // 1 = вправо, -1 = вліво
    
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        centeredSlidesBounds: true,
        centeredSlides: true,
        spaceBetween: 12,
        initialSlide: 0,
        loop: false,
        effect: 'slide',
        speed: 3000,
        freeMode: true,
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false, // Важливо!
            reverseDirection: false,
        },
        navigation: false,
        pagination: false,
        on: {
            reachEnd: function() {
                // Досягли кінця (рухаючись вправо)
                setTimeout(() => {
                    // Змінюємо напрямок на зворотний
                    this.autoplay.stop();
                    this.params.autoplay.reverseDirection = true;
                    this.autoplay.start();
                }, 1000);
            },
            reachBeginning: function() {
                // Повернулися до початку (рухаючись вліво)
                setTimeout(() => {
                    // Змінюємо напрямок на прямий
                    this.autoplay.stop();
                    this.params.autoplay.reverseDirection = false;
                    this.autoplay.start();
                }, 1000);
            }
        }
    });
});