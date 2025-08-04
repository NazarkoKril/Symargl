document.addEventListener('DOMContentLoaded', () => {
    // burger 
    
        const burgerIcon = document.querySelector('.burger-icon');
        const burgerMenu = document.querySelector('.burger-menu');
    
        if (burgerIcon && burgerMenu) {
            burgerIcon.addEventListener('click', () => {
                burgerIcon.classList.toggle('active');
                burgerMenu.classList.toggle('active');
            });
    
            document.addEventListener('click', (event) => {
                if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                    burgerIcon.classList.remove('active');
                    burgerMenu.classList.remove('active');
                }
            });
        }
    
    });

document.addEventListener('DOMContentLoaded', () => {
       
        const dropdownBtn = document.querySelector('#dropdown-btn');
        const dropdown = document.querySelector('.header-dropdown');
      
        if (dropdownBtn && dropdown) {
            dropdownBtn.addEventListener('click', () => {
                dropdownBtn.classList.toggle('open');
                dropdown.classList.toggle('open');
            });
        
            document.addEventListener('click', (event) => {
                if (!dropdown.contains(event.target) && !dropdownBtn.contains(event.target)) {
                    dropdownBtn.classList.remove('open');
                    dropdown.classList.remove('open');
                }
            });
        }
     
});

document.addEventListener('DOMContentLoaded', () => {
    const openCartBtns = document.querySelectorAll('.cart-btn'); // ← масив кнопок
    const closeCartBtn = document.getElementById('close-cart');
    const cartSidebar = document.querySelector('.basket');
    const overlay = document.querySelector('.overlay');
    const deleteItemBtns = document.querySelectorAll('.delete-item')
  
    openCartBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
      });
    });
  
    closeCartBtn.addEventListener('click', () => {
      cartSidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    overlay.addEventListener('click', () => {
      cartSidebar.classList.remove('active');
      overlay.classList.remove('active');
    });

    deleteItemBtns.forEach(button => {
        button.addEventListener("click", function () {
          this.closest(".cart-item").remove();
        });
      });
  });
  
