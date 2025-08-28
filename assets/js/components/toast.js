document.addEventListener("DOMContentLoaded", function () {
    const toast = document.querySelector(".toast");
    const addToCartBtns = document.querySelectorAll(".add-to-cart");
    const toastCloseBtn = toast.querySelector("button");
    let toastTimer;

    function showToast() {
        clearTimeout(toastTimer); 
        toast.classList.add("open");
        toastTimer = setTimeout(() => {
            toast.classList.remove("open");
        }, 3000); 
    }

    addToCartBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showToast();
        });
    });

    toastCloseBtn.addEventListener("click", () => {
        toast.classList.remove("open");
        clearTimeout(toastTimer);
    });
});