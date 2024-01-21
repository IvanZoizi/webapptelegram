let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let btn1 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let password = document.getElementById("user_password").value;
    if (name.length < 5) {
        document.getElementById("error").innerText = "Ошибка в имени";
        return;
    }
    if (email.length < 8) {
        document.getElementById("error").innerText = "Ошибка в почте";
        return;
    }
    if (password.length < 8) {
        document.getElementById("error").innerText = "Ошибка в пароле";
        return;
    }
    let data = {
        name: name,
        email: email,
        password: password
    }
    tg.sendData(JSON.stringify(data))
    tg.close()
});
