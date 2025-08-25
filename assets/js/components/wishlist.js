document.addEventListener("DOMContentLoaded", function () {
    const wishlistSection = document.querySelector(".wishlist-section");
    const noItemsSection = document.querySelector(".no-items-section");
    const catalogGrid = wishlistSection.querySelector(".catalog-grid");

    noItemsSection.style.display = "none";

    wishlistSection.addEventListener("click", function (e) {
        if (e.target.closest(".like")) {
            e.preventDefault();
            const product = e.target.closest(".catalog-grid-item");
            if (product) {
                product.classList.add("fade-out");

                setTimeout(() => {
                    product.remove();

                    if (catalogGrid.querySelectorAll(".catalog-grid-item").length === 0) {
                        wishlistSection.style.display = "none";
                        noItemsSection.style.display = "block";
                    }
                }, 300); 
            }
        }
    });
});
