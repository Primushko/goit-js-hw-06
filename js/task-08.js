const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.prevenDefault();
    console.log(event.currentTarget);
    console.log(`це форма сабміт`);
}