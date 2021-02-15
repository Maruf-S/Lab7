const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setClock() {
    let time = new Date();
    let hr = time.getHours() * 30;
    let mn = time.getMinutes() * 6;
    let sec = time.getSeconds() * 6;
    hour.style.transform = `rotateZ(${(hr) + (mn/12)}deg)`;
    minute.style.transform = `rotateZ(${mn}deg)`
    second.style.transform = `rotateZ(${(sec)}deg)`
    setTimeout(setClock, 1000);
}
setClock();