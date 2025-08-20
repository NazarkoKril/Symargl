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