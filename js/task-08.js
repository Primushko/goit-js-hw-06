const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    // відміна перезавантаження
    // отримуємо значення полів форми:
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    // перевірка щоб всі поля форми були заповнені
    if (!email || !password) {
        alert(`Будь ласка, заповніть всі поля форми!`);
        return;
    }
    // створюємо обєкт із введеними даними
    const formData = {
        email,
        password
    };
    // виводемо обєкт в консоль
    console.log(formData);
    // очищуємо введені поля форми
    form.reset();
});


