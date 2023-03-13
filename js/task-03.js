const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// отртимуємо посилання на елемент ul.galery
const galleryList = document.querySelector(`ul.gallery`);
// створюємо рядки HTML для кожного елементу масиву images
const galleryItems = images.map(
    (image) => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>`).join("");
// додаємо елементи галареї за одну операцію додавання
galleryList.insertAdjacentHTML("beforeend", galleryItems);
// Додаємо CSS клас для оформлення галереї за допомогою Flexbox
galleryList.classList.add("gallery--flexbox");

