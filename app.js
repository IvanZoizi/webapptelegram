let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let btn1 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
    tg.close()
});


