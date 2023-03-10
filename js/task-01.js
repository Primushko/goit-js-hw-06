const categoriesList = document.querySelector(`#categories`);
const items = categoriesList.querySelectorAll(`.item`);
console.log(`Number of categoies: ${items.length}`);
// Порахували і вивели в консоль кількість категорій в <ul id="categories"> - елементів li.item

items.forEach(item => {
    const title = item.querySelector(`h2`).textContent;
    const itemsCount = item.querySelectorAll(`li`).length;
    console.log(`Category: ${title}
    Elements: ${itemsCount}`);
});
// Для кожного элемента li.item у списку <ul id="categories">, знаходимо і виводимо в консоль
// текст заголовку < h2 > і кількість усіх < li >, вкладених в категорії.