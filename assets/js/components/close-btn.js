document.addEventListener("DOMContentLoaded", function () {
    const wishlistSection = document.querySelector(".items-section");
    const noItemsSection = document.querySelector(".no-items-section");
    const catalogGrid = wishlistSection.querySelector(".items-list");

    noItemsSection.style.display = "none";

    wishlistSection.addEventListener("click", function (e) {
        if (e.target.closest(".close")) {
            e.preventDefault();
            const product = e.target.closest(".item");
            if (product) {
                product.classList.add("fade-out");

                setTimeout(() => {
                    product.remove();

                    if (catalogGrid.querySelectorAll(".item").length === 0) {
                        wishlistSection.style.display = "none";
                        noItemsSection.style.display = "block";
                    }
                }, 300); 
            }
        }
    });
});
