"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрела?", "");

if(numberOfFilms < 10) {
    console.log('мало');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('классический');
} else if (numberOfFilms >= 30) {
    console.log('киноман');
} else {
    console.log('error');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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