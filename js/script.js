/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// первая задача ---------- выполнено

const adsContainer = document.querySelector('.promo__adv');
const ads = document.querySelectorAll('img');
ads.forEach(ad => {
    ad.remove()
})


// вторая задача ---------- выполнено

const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'Драма';

// третья задача ---------- выполнено

const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = `url(../img/bg.jpg)`;

// четвертая задача + пятая задача ---------- выполнено
const sortMovie = movieDB.movies.sort();

const promoItem = document.querySelectorAll('.promo__interactive-item');
// promoItem.forEach((item, index) => {
//     item.textContent = `${index + 1} ${sortMovie[index]}`;
// })

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

promoItem.forEach((item, index) => {
    movieList.innerHTML += `
         <li class="promo__interactive-item"> ${index +1} ${sortMovie[index]} 
            <div class="delete"></div>
        </li>
    `
})

const checkboxItem = document.querySelector('input[type="checkbox"]');

checkboxItem.addEventListener('change', (e) => {
    e.preventDefault();

    if (checkboxItem.checked) {
        console.log('Добавляем любимый фильм!');
    }else{console.log('Ошибка, попробуйте позже.')}
})