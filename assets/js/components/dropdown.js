document.querySelectorAll(".dropdown-box").forEach((selectBox) => {
    selectBox.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      const dropdown = this.closest(".dropdown");
      dropdown.classList.toggle("active");
    });
  });
  
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      const selectBox =
        this.closest(".dropdown").querySelector(".selected");
      selectBox.textContent = this.textContent;
      selectBox.dataset.value = this.dataset.value;
      this.closest(".dropdown").classList.remove("active");
    });
  });
  
  document.addEventListener("click", function (e) {
    const isDropdown = e.target.closest(".dropdown");
    if (!isDropdown) {
      document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });