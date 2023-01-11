import { movies } from '../data/movies';
import {
  getMovieById_api,
  getMovies_api,
  updateMovie_api,
  removeMovieById_api,
  addMovie_api,
} from '../api/moviesApi';

export const getMovies = async (limit, offset) => {
  const params = `limit=${limit}&offset=${offset}`;
  const { data } = await getMovies_api(params);
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await getMovieById_api(id);
  return data;
};

export const deleteMovie = async (id) => {
  const { data } = await removeMovieById_api(id);
  return data;
};

export const updateMovie = async (movie) => {
  const res = await updateMovie_api(movie);
  return res;
};

export const addMovie = async (movie) => {
  const res = await addMovie_api(movie);
  return res;
};
