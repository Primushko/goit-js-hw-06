const nameInput = document.getElementById("name-input");
// Створив змінну nameInput
const nameOutput = document.getElementById("name-output");
// Створив змінну nameOutput
nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
        nameOutput.textContent = "Anonymous";
      // Якщо поле введення порожнє, використовується значення "Anonymous".
    } else {
        nameOutput.textContent = nameInput.value;
      // Яке значення введено в поле таке і виводиться.
    }
});
