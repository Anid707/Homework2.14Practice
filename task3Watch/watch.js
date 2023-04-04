// Задание 3
// 3.1. Цифровые часы
// Создать виджет-часы, как в примере ЗДЕСЬ.
// Вам понадобится каждую секунду (через setInterval) запускать функцию, которая будет забирать время из объекта Date и выводить в разметку. Цвета и т.п. прописать в CSS.
// 3.2. Аналоговые часы (по желанию)
// Создать виджет-часы, как в примере ЗДЕСЬ.
// ЗДЕСЬ видео, посмотрите его, чтобы понимать, как делать. Суть в том, что поворачиваться будут квадраты-обертки, а стрелки просто находятся внутри: см. ЗДЕСЬ.
// Дизайн - на свое усмотрение, изображение-циферблат можно взять ЗДЕСЬ.
// Почитайте про соотношение скорости движения стрелок и градусов поворота ЗДЕСЬ.
const hours = document.getElementById("hour"),
minutes = document.getElementById("minute"),
seconds = document.getElementById("second");

const setTime = () => {
    let now = new Date();
    // now.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'});
    let hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    second = second < 10 ? `0${second}` : second;
    minute = minute < 10 ? `0${minute}` : minute;
    hour = hour < 10 ? `0${hour}` : hour;
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
}

setInterval(setTime, 1000);