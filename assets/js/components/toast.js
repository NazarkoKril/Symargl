document.addEventListener("DOMContentLoaded", () => {
  const toast = document.querySelector(".toast");
  const toastText = toast.querySelector("p");
  const toastCloseBtn = toast.querySelector("button");
  const addToCartBtns = document.querySelectorAll(".add-to-cart");
  const likeBtns = document.querySelectorAll(".like");
  let toastTimer;

  const showToast = (msg) => {
    clearTimeout(toastTimer);
    toastText.textContent = msg;
    toast.classList.add("open");
    toastTimer = setTimeout(() => toast.classList.remove("open"), 3000);
  };

  addToCartBtns.forEach(btn =>
    btn.addEventListener("click", e => {
      e.preventDefault();
      showToast("Товар успішно додано до кошику.");
    })
  );

  likeBtns.forEach(btn => {
    const img = btn.querySelector("img");
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (btn.classList.contains("close")) {
        showToast("Товар успішно видалено з вішлісту");
      } else {
        if (btn.classList.toggle("active")) {
          img.src = "/assets/img/icons/favorite.svg";
          showToast("Товар успішно додано до вішлісту");
        } else {
          img.src = "/assets/img/icons/like.svg";
          showToast("Товар видалено з вішлісту");
        }
      }
      img.classList.add("animate");
      setTimeout(() => img.classList.remove("animate"), 300);
    });
  });

  toastCloseBtn.addEventListener("click", () => {
    toast.classList.remove("open");
    clearTimeout(toastTimer);
  });
});
