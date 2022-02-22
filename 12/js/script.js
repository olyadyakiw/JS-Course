"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрела?", "");
const lastFilm = prompt("Один из последних просмотренних фильмов?", "");
const mark = +prompt("На сколько оцените его?", "");
const lastFilm2 = prompt("Один из последних просмотренних фильмов?", "");
const mark2 = +prompt("На сколько оцените его?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = mark;
personalMovieDB.movies[lastFilm2] = mark2;

console.log(personalMovieDB);