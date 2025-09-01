document.addEventListener("DOMContentLoaded", () => {
  const sizeInputs = document.querySelectorAll('input[name="sizes"]');
  const table = document.querySelector("#dimensional-grid table");

  sizeInputs.forEach(input => {
    input.addEventListener("change", () => {
      // зняти всі selected
      table.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));

      // беремо номер колонки з data-col
      const colIndex = parseInt(input.dataset.col, 10);

      if (!isNaN(colIndex)) {
        // підсвічуємо <th> у шапці
        table.querySelectorAll("thead tr").forEach(row => {
          row.children[colIndex].classList.add("selected");
        });

        // підсвічуємо <td> у тілі
        table.querySelectorAll("tbody tr").forEach(row => {
          row.children[colIndex].classList.add("selected");
        });
      }
    });
  });
});
