document.addEventListener('DOMContentLoaded', function() {
    const filtersAside = document.querySelector(".filters");
    const filtersBtn = document.getElementById("filters-btn");
    const filtersCloseBtn = document.getElementById("filters-close-btn");
    const overlay = document.querySelector(".overlay.right");

    if (filtersAside && filtersBtn && filtersCloseBtn && overlay) {
        filtersBtn.addEventListener("click", () => {
            filtersAside.classList.add('open');
            overlay.classList.add('open');
        });

        filtersCloseBtn.addEventListener("click", () => {
            filtersAside.classList.remove('open');
            overlay.classList.remove('open');
        });

        overlay.addEventListener("click", () => {
            filtersAside.classList.remove('open');
            overlay.classList.remove('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.filter');
  
  filterItems.forEach(item => {
    const header = item.querySelector('.filter-header');
    
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
});