const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ul = document.querySelector("#ingredients");
const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  return li;
};
const listItems = ingredients.map((ingredient) => createListItem(ingredient));
ul.append(...listItems);
// за допомогою методу "querySelector" получаємо посилання на елемент "ul"

// за допомогою функції "createListItem" створюємо елемент "li", вставляємо текст і 
// добавляємо клас "item". після функція повертає створений елемент.

// за допомогою методу "map" преобразовуємо масив "ingredients" в масив
// елементів "li" використовуючи функцію "createListItem".
// за допомогою метода "append" використовуємо "..." для вставки всіх елементів списка 
// за одну операцію в "ul".