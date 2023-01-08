import { movies } from '../data/movies';
import { getMovies_api } from '../api/moviesApi';

export const getMovies = async () => {
  const { data } = await getMovies_api();
  console.log(data);
  return data;
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
