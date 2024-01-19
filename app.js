let tg = window.Telegram.WebApp;

let start_reg = document.getElementById("btn1");
let reg = document.getElementById("btn2");

start_reg.addEventListener("click", () => {
    document.getElementById("start").style.display = "none";
    document.getElementById("reg_form").style.display = "block";
})
