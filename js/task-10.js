const controls = document.querySelector(`#controls`);
const createBtn = controls.querySelector(`[data-create]`);
const destroyBtn = controls.querySelector(`[data-destroy]`);
const boxesContainer = document.querySelector(`#boxes`);

function createBoxes(amount) {
  const boxSize = 30;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ``;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener(`click`, () => {
  const amount = Number(controls.querySelector(`input`).value);
  createBoxes(amount);
});
destroyBtn.addEventListener(`click`, destroyBoxes);
