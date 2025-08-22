document.addEventListener('DOMContentLoaded', function() {
    const helpAsides = document.querySelectorAll(".help-aside");
    const overlay = document.querySelector(".overlay.right");

    helpAsides.forEach(item => {
        const closeBtn = item.querySelector(".close-btn");
        const backBtn = item.querySelector(".back-btn");
        const openBtn = document.getElementById(`${item.dataset.target}-btn`);

        openBtn.addEventListener("click", () => {
            item.classList.add('open');

            if (!overlay.classList.contains('open')) {
                overlay.classList.add('open');
            }
        });

        closeBtn.addEventListener("click", () => {
            item.classList.remove('open');
            overlay.classList.remove('open');

            if (backBtn) {
                item.parentElement.classList.remove('open');
            }
        });

        overlay.addEventListener("click", () => {
            item.classList.remove('open');
            overlay.classList.remove('open');
        });

        if (backBtn) {
            backBtn.addEventListener("click", () => item.classList.remove('open'));
        }
    });
});