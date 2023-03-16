const counterValue = document.getElementById(`value`); 
// Створив змінну counterValue, в якій буде зберігатися поточне значення лічильника.
//  Змінна має атрибут`id="value"`
const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
// Створив змінні які посилаються на елементи кнопок для зменьшення та збільшення значення лічильника відповідно.
//  Кнопки мають атрибути data - action="decrement" и data - action="increment" відповідно.
let value = 0;
// створив змінну та ініціалізував її значенням до 0.
decrementButton.addEventListener(`click`, () => {
    value --;
    counterValue.textContent = value;
});
// функція зменшує лічильник на одиницю та записує оновлене значення 'value'
incrementButton.addEventListener(`click`, () => {
    value ++;
    counterValue.textContent = value;
});
// функція зменшує лічильник на одиницю та записує оновлене значення 'value'