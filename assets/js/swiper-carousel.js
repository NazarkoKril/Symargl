document.addEventListener("DOMContentLoaded", function () {
	let direction = 1;

	const swiper = new Swiper(".mySwiper", {
		slidesPerView: "auto",
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		centeredSlidesBounds: true,
		centeredSlides: true,
		spaceBetween: 12,
		initialSlide: 0,
		loop: false,
		effect: "slide",
		speed: 3000,
		freeMode: true,
		autoplay: {
			delay: 500,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
			reverseDirection: false,
		},
		navigation: false,
		pagination: false,
		on: {
			reachEnd: function () {
				setTimeout(() => {
					this.autoplay.stop();
					this.params.autoplay.reverseDirection = true;
					this.autoplay.start();
				}, 1000);
			},
			reachBeginning: function () {
				setTimeout(() => {
					this.autoplay.stop();
					this.params.autoplay.reverseDirection = false;
					this.autoplay.start();
				}, 1000);
			},
		},
	});
});
