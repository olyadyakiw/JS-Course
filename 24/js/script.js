"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрела?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрела?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Один из последних просмотренних фильмов?", "");
        const mark = +prompt("На сколько оцените его?", "");
        if(lastFilm != '' &&  mark != '' && lastFilm.length < 50 && lastFilm != null && mark != null) {
            personalMovieDB.movies[lastFilm] = mark;
        }
        else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {    
    if(numberOfFilms < 10) {
        console.log('мало');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log('классический');
    } else if (numberOfFilms >= 30) {
        console.log('киноман');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// let i = 0;

// while(i < 2) {
//     const lastFilm = prompt("Один из последних просмотренних фильмов?", "");
//     if(lastFilm.length === 0 || lastFilm.length > 50) {
//         i--;
//     }
//     const mark = +prompt("На сколько оцените его?", "");
    
//     personalMovieDB.movies[lastFilm] = mark;
//     i++;
// }

// do {
//     const lastFilm = prompt("Один из последних просмотренних фильмов?", "");
//     if(lastFilm.length === 0 || lastFilm.length > 50) {
//         i--;
//     }
//     const mark = +prompt("На сколько оцените его?", "");
    
//     personalMovieDB.movies[lastFilm] = mark;
//     i++;
// } while(i < 2);



console.log(personalMovieDB);