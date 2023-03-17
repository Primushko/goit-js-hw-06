const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
// за допомогою методу getElementById створюю змінні nameInput та nameOutput щоб отримати
// доступ до елементів з ідентифікаторами "name-input" та "name-output"
// Далі за допомогою методу addEventListener() встановлюється слухач подій на елемент "name-input".
//  Подія "input" виникає, коли користувач вводить нові дані в поле вводу.
nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
        nameOutput.textContent = "Anonymous";
      // Якщо поле введення порожнє, використовується значення "Anonymous".
    } else {
        nameOutput.textContent = nameInput.value;
      // Яке значення введено в поле таке і виводиться.
    }
});
