document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll('.faq-box input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.querySelectorAll('.faq-box input[type="checkbox"]').forEach((other) => {
        if (other !== this) {
           setTimeout(() => {
          other.checked = false;
          }, 10); 
        }
      });
    }
  });
});
});