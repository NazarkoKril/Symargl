document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".section__sweater");
    const sweaterImg = document.querySelector(".sweater__img img");
    const sweaterInfo = document.querySelector(".sweater_info");
    const sweaterContent = document.querySelector(".sweater__content");
    const sweaterAnimation = document.querySelector(".sweater__animation");

    if (!section || !sweaterImg || !sweaterInfo || !sweaterContent || !sweaterAnimation) return;

    let isAnimating = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isAnimating) {
                isAnimating = true;
                document.body.style.overflow = "hidden";
                window.scrollTo({ top: section.offsetTop, behavior: "instant" });

                sweaterImg.style.transition = "width 2s ease";
                sweaterImg.style.width = "35%";
                sweaterInfo.classList.add("active");
                sweaterContent.classList.add("text-active");
                sweaterAnimation.classList.add("compact-view");

                setTimeout(() => {
                    document.body.style.overflow = "";
                    window.scrollTo({ top: section.offsetTop, behavior: "instant" });
                }, 1000);
            }
        });
    }, {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -150% 0px"
    });

    observer.observe(section);
});
