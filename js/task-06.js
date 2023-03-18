const input = document.getElementById(`validation-input`);
const length = input.getAttribute(`data-length`);

// спочатку отримуємо посилання на input і значення атрибуту data-length. 
// Потім додаємо обробник події blur на input, який перевіряє,чи має input правильну кількість символів. 
input.addEventListener(`blur`, () => {
    if (input.value.length === parseInt(length)) {
        input.classList.remove(`invalid`);
      // цей рядок коду видаляє клас invalid зі списку класів елемента input.
      //  Якщо елемент мав клас invalid, то цей рядок коду зробить його неактивним.
        input.classList.add(`valid`);
      // цей рядок коду додає клас valid до списку класів елемента input. Якщо елемент не мав класу valid,
      // то цей рядок коду додасть його до списку класів, що зробить його активним.
    } else {
        input.classList.remove(`valid`);
        input.classList.add(`invalid`);
    }
});
    // коли вміст елемента input має правильну кількість символів, ми видаляємо клас invalid і додаємо клас valid,
    // щоб рамка навколо елемента стала зеленою, як це встановлено у завданні ДЗ
    // Якщо ж вміст елемента має неправильну кількість символів, то ми робимо навпаки
    // - видаляємо клас valid і додаємо клас invalid, щоб рамка навколо елемента стала червоною.