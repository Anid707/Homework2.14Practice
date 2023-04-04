// Задание 1
// Реализовать переключение блоков с помощью табов.
// Пример результата:
// https://ucarecdn.com
// ПОРЯДОК РАБОТЫ, если нет своих идей
// 1. Подготовить верстку. https://youtu.be/mnfBHvNm_z8
// 2. Создаем переменные и собираем в коллекции все кнопки и все блоки с контентом.
// 3. Перебираем все кнопки и вешаем на них обработчик клика. При клике запускается функция openTab, в нее передаем 2 параметра - event и id блока (id блока = дополненный id кнопки, по которой пришелся клик).
// 4. Описываем функцию openTab, которая показывает блок. Она принимает два параметра - event и id (событие - нужно для определения кнопки, по которой пришелся клик, и id - нужно для определения нужного блока). Внутри этой функции:- перебираем все кнопки и убираем у них класс active (используем forEach и стрелочный синтаксис)- перебираем все блоки и скрываем их (используем forEach и стрелочный синтаксис)
// - определяем кнопку, по которой кликнули (event.target) и добавляем ей класс active. Находим по id блок, связанный с активной кнопкой, и показываем его.
const container = document.querySelector(".container"),
buttonList = container.querySelectorAll("button"),
blockList =  container.querySelectorAll(".tab-content");

buttonList.forEach(button => {
    button.addEventListener("click", event =>{
        const id = event.target.id;
        openTab(event, id);
    })
})

const openTab = (event, id) => {
    buttonList.forEach(button => {
        button.classList.remove("active");
    })
    event.target.classList.add("active");
    blockList.forEach(block => {
        console.log(block);
        block.classList.remove("active");
        if (block.id.includes(`${id}`)){
            block.classList.add("active");
        }
    })
}

// Задание 2
// Сверстать любую простую страничку и реализовать смену темы.
// В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс со страницы удаляется.
const themeBtn = document.getElementById("theme"),
tabs = container.querySelector(".tabs");

themeBtn.addEventListener("click", event=>{
    themeBtn.classList.toggle("dark-theme-btn");
    themeBtn.classList.contains("dark-theme-btn") ? themeBtn.innerText = "Light theme" : themeBtn.innerText = "Dark theme";
    tabs.classList.toggle("dark-theme-tabs");
    blockList.forEach(block => {
        block.classList.toggle("dark-theme");
    })
    buttonList.forEach(button => {
        button.classList.toggle("dark-tab-btn");
    })
    document.body.classList.toggle("dark-theme");
})


// Задание 3
// 3.1. Цифровые часы
// Создать виджет-часы, как в примере ЗДЕСЬ.
// Вам понадобится каждую секунду (через setInterval) запускать функцию, которая будет забирать время из объекта Date и выводить в разметку. Цвета и т.п. прописать в CSS.

//"./task3Watch/watch.html"

// 3.2. Аналоговые часы (по желанию)
// Создать виджет-часы, как в примере ЗДЕСЬ.
// ЗДЕСЬ видео, посмотрите его, чтобы понимать, как делать. Суть в том, что поворачиваться будут квадраты-обертки, а стрелки просто находятся внутри: см. ЗДЕСЬ.
// Дизайн - на свое усмотрение, изображение-циферблат можно взять ЗДЕСЬ.
// Почитайте про соотношение скорости движения стрелок и градусов поворота ЗДЕСЬ.