const rangeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
    const fontSize = rangeInput.value + "px";
    textSpan.style.fontSize = fontSize;
});
