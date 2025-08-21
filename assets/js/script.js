// burger
 document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger.mob");
    const mobileContainer = document.querySelector(".header__mobile_container");

    if (burger && mobileContainer) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileContainer.classList.toggle("active");
      });
    }
  });

  //cursor
  const cursor = document.querySelector(".cursor");
  const border = document.querySelector(".cursor-border");

  let mouseX = 0, mouseY = 0;
  let borderX = 0, borderY = 0;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.top = mouseY + "px";
    cursor.style.left = mouseX + "px";

    const el = document.elementFromPoint(mouseX, mouseY);
    if (el) {
      const bgColor = window.getComputedStyle(el).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const brightness = (0.299*rgb[0] + 0.587*rgb[1] + 0.114*rgb[2]);
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

document.addEventListener("mouseover", e => {
  if (e.target.closest("a, button")) {
    border.classList.add("hover");
  }
});

document.addEventListener("mouseout", e => {
  if (e.target.closest("a, button")) {
    border.classList.remove("hover");
  }
});