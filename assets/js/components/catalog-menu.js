document.addEventListener('DOMContentLoaded', function() {
    const menuAside = document.querySelector(".menu");
    const menuBtn = document.getElementById("menu-btn");
    const menuCloseBtn = document.getElementById("menu-close-btn");
    const overlay = document.querySelector(".overlay.left");

    if (menuAside && menuBtn && menuCloseBtn && overlay) {
        menuBtn.addEventListener("click", () => {
            menuAside.classList.add('open');
            overlay.classList.add('open');
        });

        menuCloseBtn.addEventListener("click", () => {
            menuAside.classList.remove('open');
            overlay.classList.remove('open');
        });

        overlay.addEventListener("click", () => {
            menuAside.classList.remove('open');
            overlay.classList.remove('open');
        });
    }
});