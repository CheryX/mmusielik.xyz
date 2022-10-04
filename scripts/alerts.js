const alertText = document.getElementById("alertContent");
const alertBg = document.getElementById("alertBg");

const delay_ = ms => new Promise(res => setTimeout(res, ms));

async function customAlert(message) {

    alertText.innerText = message;
    alertBg.style.opacity = 1.0;

    await delay_(message.length * 100 + 2000);

    alertBg.style.opacity = 0.0;

}