class SweaterScrollAnimation {
	constructor() {
		this.section = document.querySelector(".section__sweater");
		this.sweaterImg = document.querySelector(".sweater__img");
		this.sweaterInfo = document.querySelector(".sweater_info");
		this.sweaterContent = document.querySelector(".sweater__content");
		this.sweaterAnimation = document.querySelector(".sweater__animation");

		this.config = {
			initialWidthPercent: 100,
			minWidthPercent: 35,
			scrollSteps: 40,
		};

		this.isScrollBlocked = false;
		this.currentWidthPercent = this.config.initialWidthPercent;
		this.scrollStep = 0;
		this.animationComplete = false;
		this.animationStartScrollY = 0;
		this.isReverseAnimation = false;
		this.lastScrollY = 0;
		this.canStartNewAnimation = true;
		this.isForceScrolling = false;

		this.init();
	}

	init() {
		if (
			!this.section ||
			!this.sweaterImg ||
			!this.sweaterInfo ||
			!this.sweaterContent ||
			!this.sweaterAnimation
		) {
			return;
		}

		this.setupEventListeners();
		this.checkImagePosition();
		this.lastScrollY = window.scrollY;
	}

	setupEventListeners() {
		window.addEventListener("scroll", () => {
			if (!this.isScrollBlocked) {
				this.checkImagePosition();
			}
			this.lastScrollY = window.scrollY;
		});

		window.addEventListener(
			"scroll",
			(e) => {
				if (this.isScrollBlocked && !this.isForceScrolling) {
					this.handleScroll(e);
				}
			},
			{ passive: false }
		);

		window.addEventListener(
			"wheel",
			(e) => {
				if (this.isScrollBlocked && !this.isForceScrolling) {
					this.handleWheel(e);
				}
			},
			{ passive: false }
		);

		window.addEventListener("keydown", (e) => {
			if (this.isScrollBlocked) {
				this.handleKeydown(e);
			}
		});

		window.addEventListener("mousedown", (e) => {
			if (this.isScrollBlocked) {
				this.handleScrollbarInteraction(e);
			}
		});

		let isScrollbarDragging = false;
		window.addEventListener("mousedown", (e) => {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			if (scrollbarWidth > 0 && e.clientX >= document.documentElement.clientWidth) {
				isScrollbarDragging = true;
				if (this.isScrollBlocked) {
					this.forceSkipToEnd();
				}
			}
		});

		window.addEventListener("mousemove", (e) => {
			if (isScrollbarDragging && this.isScrollBlocked) {
				this.forceSkipToEnd();
			}
		});

		window.addEventListener("mouseup", () => {
			isScrollbarDragging = false;
		});

		let touchStartY = 0;
		window.addEventListener("touchstart", (e) => {
			if (this.isScrollBlocked) {
				touchStartY = e.touches[0].clientY;
			}
		});

		window.addEventListener(
			"touchmove",
			(e) => {
				if (this.isScrollBlocked && !this.isForceScrolling) {
					const deltaY = touchStartY - e.touches[0].clientY;
					this.updateAnimation(deltaY > 0 ? 1 : -1);
					touchStartY = e.touches[0].clientY;
					e.preventDefault();
				}
			},
			{ passive: false }
		);
	}

	handleKeydown(e) {
		switch(e.key) {
			case 'End':
				this.forceSkipToEnd();
				e.preventDefault();
				break;
			case 'Home':
				this.forceSkipToTop();
				e.preventDefault();
				break;
			case 'PageDown':
				this.forceSkipToEnd();
				e.preventDefault();
				break;
			case 'PageUp':
				this.forceSkipToTop();
				e.preventDefault();
				break;
		}
	}

	handleScrollbarInteraction(e) {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const clickX = e.clientX;
		
		if (scrollbarWidth > 0 && clickX >= document.documentElement.clientWidth) {
			this.forceSkipToEnd();
		}
	}

	forceSkipToEnd() {
		if (!this.isScrollBlocked) {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth'
			});
			return;
		}

		this.isForceScrolling = true;
		
		this.scrollStep = this.config.scrollSteps;
		this.currentWidthPercent = this.config.minWidthPercent;
		
		const img = this.sweaterImg.querySelector("img");
		if (img) {
			img.style.width = this.currentWidthPercent + "%";
		}
		
		this.toggleTextVisibility();
		
		this.animationComplete = true;
		this.isScrollBlocked = false;
		this.isReverseAnimation = false;
		this.canStartNewAnimation = true;
		document.body.style.overflow = "";
		
		window.scrollTo(0, document.body.scrollHeight);
		
		this.isForceScrolling = false;
	}

	forceSkipToTop() {
		if (!this.isScrollBlocked) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
			return;
		}

		this.isForceScrolling = true;
		
		this.resetAnimation();
		
		window.scrollTo(0, 0);
		
		this.isForceScrolling = false;
	}

	forceReverseAnimation() {
		if (!this.isScrollBlocked) return;

		this.isForceScrolling = true;
		
		this.scrollStep = 0;
		this.currentWidthPercent = this.config.initialWidthPercent;
		
		const img = this.sweaterImg.querySelector("img");
		if (img) {
			img.style.width = this.currentWidthPercent + "%";
		}
		
		this.toggleTextVisibility();
		this.completeReverseAnimation();
		
		setTimeout(() => {
			this.isForceScrolling = false;
			
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}, 100);
	}

	checkImagePosition() {
		const imgRect = this.sweaterImg.getBoundingClientRect();
		const windowHeight = window.innerHeight;
		const currentScrollY = window.scrollY;
		const scrollDirection = currentScrollY > this.lastScrollY ? "down" : "up";

		let triggerOffset = 70;
		const screenWidth = window.innerWidth;

		if (screenWidth <= 480) {
			triggerOffset = 50;
		} else if (screenWidth <= 768) {
			triggerOffset = 30;
		} else if (screenWidth <= 1024) {
			triggerOffset = 70;
		}

		if (
			scrollDirection === "down" &&
			imgRect.top <= triggerOffset &&
			imgRect.bottom > 0
		) {
			if (
				!this.isScrollBlocked &&
				!this.animationComplete &&
				this.canStartNewAnimation
			) {
				this.startAnimation(false);
			}
		}

		if (
			scrollDirection === "up" &&
			this.animationComplete &&
			imgRect.top >= 0 &&
			imgRect.top <= 10
		) {
			if (!this.isScrollBlocked && this.canStartNewAnimation) {
				this.startAnimation(true);
			}
		}

		if (
			imgRect.bottom < -100 &&
			this.isScrollBlocked &&
			!this.isReverseAnimation
		) {
			this.resetAnimation();
		}
	}

	startAnimation(isReverse = false) {
		this.isScrollBlocked = true;
		this.isReverseAnimation = isReverse;
		this.animationStartScrollY = window.scrollY;
		this.isForceScrolling = false;

		if (isReverse) {
			this.scrollStep = this.config.scrollSteps;
			this.currentWidthPercent = this.config.minWidthPercent;
			this.animationComplete = false;
		} else {
			this.scrollStep = 0;
			this.currentWidthPercent = this.config.initialWidthPercent;
		}

		const img = this.sweaterImg.querySelector("img");
		if (img) {
			img.style.width = this.currentWidthPercent + "%";
			img.style.maxWidth = "none";
		}

		document.body.style.overflow = "hidden";
		window.scrollTo(0, this.animationStartScrollY);
	}

	handleScroll(e) {
		const currentScrollY = window.scrollY;
		const lastScrollY = this.animationStartScrollY;
		const step = currentScrollY > lastScrollY ? 1 : -1;

		this.updateAnimation(step);
		window.scrollTo(0, this.animationStartScrollY);
		e.preventDefault();
	}

	handleWheel(e) {
		const step = e.deltaY > 0 ? 1 : -1;
		this.updateAnimation(step);
		e.preventDefault();
	}

	updateAnimation(step) {
		if (this.isReverseAnimation) {
			if (step < 0) {
				this.scrollStep -= 1;
			} else {
				this.scrollStep += 1;
			}
			this.scrollStep = Math.max(
				0,
				Math.min(this.config.scrollSteps, this.scrollStep)
			);
		} else {
			this.scrollStep += step;
			this.scrollStep = Math.max(
				0,
				Math.min(this.config.scrollSteps, this.scrollStep)
			);
		}

		const progress = this.scrollStep / this.config.scrollSteps;
		const widthRange =
			this.config.initialWidthPercent - this.config.minWidthPercent;
		this.currentWidthPercent =
			this.config.initialWidthPercent - widthRange * progress;

		const img = this.sweaterImg.querySelector("img");
		if (img) {
			img.style.width = this.currentWidthPercent + "%";
		}

		this.toggleTextVisibility();

		if (this.isReverseAnimation && this.scrollStep <= 0) {
			this.completeReverseAnimation();
		} else if (
			!this.isReverseAnimation &&
			this.scrollStep >= this.config.scrollSteps
		) {
			this.completeAnimation();
		}
	}

	toggleTextVisibility() {
		const isActive = this.currentWidthPercent <= this.config.minWidthPercent;

		if (isActive && !this.sweaterInfo.classList.contains("active")) {
			this.sweaterInfo.classList.add("active");
			this.sweaterContent.classList.add("text-active");
			this.sweaterAnimation.classList.add("compact-view");
		} else if (!isActive && this.sweaterInfo.classList.contains("active")) {
			this.sweaterInfo.classList.remove("active");
			this.sweaterContent.classList.remove("text-active");
			this.sweaterAnimation.classList.remove("compact-view");
		}
	}

	completeAnimation() {
		this.animationComplete = true;
		this.isScrollBlocked = false;
		this.isReverseAnimation = false;
		this.canStartNewAnimation = true;
		document.body.style.overflow = "";
	}

	completeReverseAnimation() {
		this.animationComplete = false;
		this.isScrollBlocked = false;
		this.isReverseAnimation = false;
		this.currentWidthPercent = this.config.initialWidthPercent;

		this.canStartNewAnimation = false;

		document.body.style.overflow = "";

		const img = this.sweaterImg.querySelector("img");
		if (img) {
			img.style.width = "";
			img.style.maxWidth = "";
		}

		this.sweaterInfo.classList.remove("active");
		this.sweaterContent.classList.remove("text-active");
		this.sweaterAnimation.classList.remove("compact-view");

		setTimeout(() => {
			this.canStartNewAnimation = true;
		}, 500);
	}

	resetAnimation() {
		this.isScrollBlocked = false;
		this.animationComplete = false;
		this.isReverseAnimation = false;
		this.scrollStep = 0;
		this.currentWidthPercent = this.config.initialWidthPercent;
		this.canStartNewAnimation = true;

		document.body.style.overflow = "";

		const img = this.sweaterImg.querySelector("img");
		if (img) {
			img.style.width = "";
			img.style.maxWidth = "";
		}

		this.sweaterInfo.classList.remove("active");
		this.sweaterContent.classList.remove("text-active");
		this.sweaterAnimation.classList.remove("compact-view");
	}

	updateConfig(newConfig) {
		this.config = { ...this.config, ...newConfig };
	}
}

document.addEventListener("DOMContentLoaded", () => {
	if (window.innerWidth > 840) {
		const sweaterAnimation = new SweaterScrollAnimation();

		const updateConfigForScreen = () => {
			const screenWidth = window.innerWidth;

			if (screenWidth <= 480) {
				sweaterAnimation.updateConfig({
					initialWidthPercent: 100,
					minWidthPercent: 45,
					scrollSteps: 150,
				});
			} else if (screenWidth <= 768) {
				sweaterAnimation.updateConfig({
					initialWidthPercent: 100,
					minWidthPercent: 40,
					scrollSteps: 170,
				});
			} else if (screenWidth <= 1024) {
				sweaterAnimation.updateConfig({
					initialWidthPercent: 100,
					minWidthPercent: 38,
					scrollSteps: 180,
				});
			} else {
				sweaterAnimation.updateConfig({
					initialWidthPercent: 100,
					minWidthPercent: 35,
					scrollSteps: 200,
				});
			}
		};

		updateConfigForScreen();
		window.addEventListener("resize", updateConfigForScreen);
	}
});