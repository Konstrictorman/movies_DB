import { movies } from '../data/movies';

export const getMovies = () => {
  return movies;
};

export const getMovieById = (id) => {
  return movies.find((x) => x.id === id);
};

export const deleteMovie = (id) => {
  return movies.filter((x) => x.id !== id);
};

export const updateMovie = (movie) => {
  return movies.map((x) => (x.id !== movie.id ? x : movie));
};

export const addMovie = (movie) => {
  return movies.splice(0, 0, movie);
};
