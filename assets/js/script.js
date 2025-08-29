// burger
document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".burger.mob");
	const mobileContainer = document.querySelector(".header__mobile_container");
	const body = document.body;

	if (burger && mobileContainer) {
		burger.addEventListener("click", () => {
			const isMenuOpen = burger.classList.contains("active");

			burger.classList.toggle("active");
			mobileContainer.classList.toggle("active");

			if (!isMenuOpen) {
				body.style.overflow = "hidden";
			} else {
				body.style.overflow = "";
			}
		});
	}
});

//cursor
const cursor = document.querySelector(".cursor");
const border = document.querySelector(".cursor-border");

let mouseX = 0,
	mouseY = 0;
let borderX = 0,
	borderY = 0;

document.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
	cursor.style.top = mouseY + "px";
	cursor.style.left = mouseX + "px";

	const el = document.elementFromPoint(mouseX, mouseY);
	if (el) {
		const bgColor = window.getComputedStyle(el).backgroundColor;
		const rgb = bgColor.match(/\d+/g);
		if (rgb) {
			const brightness = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
			if (brightness < 128) {
				border.style.borderColor = "#fff";
				cursor.style.background = "#fff";
			} else {
				border.style.borderColor = "#0097a7";
				cursor.style.background = "#0097a7";
			}
		}
	}
});

function animate() {
	borderX += (mouseX - borderX) * 0.1;
	borderY += (mouseY - borderY) * 0.1;
	border.style.top = borderY + "px";
	border.style.left = borderX + "px";
	requestAnimationFrame(animate);
}
animate();

document.addEventListener("mouseover", (e) => {
	if (e.target.closest("a, button")) {
		border.classList.add("hover");
	}
});

document.addEventListener("mouseout", (e) => {
	if (e.target.closest("a, button")) {
		border.classList.remove("hover");
	}
});

// Header Scroll Behavior
const style = document.createElement("style");
style.textContent = `
  .header__container {
    transition: transform 0.6s ease-in-out;
  }
  .header__container.hidden {
    transform: translateY(-100%);
  }
`;
document.head.appendChild(style);

let lastScrollPosition = 0;
let ticking = false;
const headerContainer = document.querySelector(".header__container");
const SCROLL_THRESHOLD = 20;
const HEADER_HEIGHT = 50;

if (headerContainer) {
	window.addEventListener("scroll", () => {
		const currentScrollPosition = window.pageYOffset;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				if (currentScrollPosition <= 20) {
					headerContainer.classList.remove("hidden");
				} else if (
					Math.abs(currentScrollPosition - lastScrollPosition) >=
					SCROLL_THRESHOLD
				) {
					if (currentScrollPosition > lastScrollPosition) {
						headerContainer.classList.add("hidden");
					} else {
						headerContainer.classList.remove("hidden");
					}
					lastScrollPosition = currentScrollPosition;
				}
				ticking = false;
			});
			ticking = true;
		}
	});
}

