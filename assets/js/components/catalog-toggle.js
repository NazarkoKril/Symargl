document.addEventListener('DOMContentLoaded', function() {
    const toggleOne = document.querySelector('#toggle-one');
    const toggleGrid = document.querySelector('#toggle-grid');
    const catalogOne = document.querySelector('.catalog-one');
    const catalogGrid = document.querySelector('.catalog-grid');

    toggleOne.addEventListener("click", () => {
        catalogGrid.style.display = 'none';
        catalogOne.style.display = 'block';
        toggleGrid.classList.remove('active');
        toggleOne.classList.add('active');
    });

    toggleGrid.addEventListener("click", () => {
        catalogOne.style.display = 'none';
        catalogGrid.style.display = 'grid';
        toggleOne.classList.remove('active');
        toggleGrid.classList.add('active');
    });
});