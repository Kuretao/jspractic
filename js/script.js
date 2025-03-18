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

function filterMovie() {
    const movieList = document.querySelector('.promo__interactive-list');
    movieList.innerHTML = '';

    movieDB.movies.sort().forEach((item, index) => {

        const li = document.createElement("li");
        let itemLi = sortMovie[index];
        if (itemLi.length > 21) {
            itemLi = sortMovie[index].slice(0, 21) + '...';
        }
        li.className = "promo__interactive-item";
        li.dataset.index = index;
        li.innerHTML = `
        ${index + 1} ${itemLi}
        <div class="delete"></div>
    `;

        movieList.appendChild(li);
    });

    document.querySelector('button').addEventListener('click', createFilm);

    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.closest(".promo__interactive-item").remove();
        });
    });
}

filterMovie();

function createFilm(event) {
    event.preventDefault();

    const input = document.querySelector('.adding__input');
    const checkboxItem = document.querySelector('input[type="checkbox"]');

    if (input.value.length > 0 && checkboxItem.checked) {
        movieDB.movies.push(input.value);
        movieDB.movies.sort();
        filterMovie();
        console.log(input.value);
        console.log(movieDB.movies);
    } else {console.log("no");}

    checkboxItem.addEventListener('change', (e) => {
        e.preventDefault();

        if (checkboxItem.checked) {
            console.log('Добавляем любимый фильм!');
        }else{console.log('Фильм не добавлен.')}
    })
}

