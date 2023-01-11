import axios from 'axios';

const API_URL = 'http://localhost:4000';

const baseConfig = {
  url: `${API_URL}/movies`,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
  },
};

export const getMovies_api = (params) => {
  const config = {
    ...baseConfig,
    method: 'get',
    url: `${API_URL}/movies?${params}`,
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
  };
  return axios(config);
};

export const getMovieById_api = (id) => {
  const config = {
    ...baseConfig,
    method: 'get',
    url: `${API_URL}/movies/${id}`,
  };
  return axios(config);
};

export const addMovie_api = (movie) => {
  const config = {
    ...baseConfig,
    method: 'post',
    data: movie,
  };
  return axios(config);
};

export const updateMovie_api = (movie) => {
  const config = {
    ...baseConfig,
    method: 'put',
    data: movie,
  };
  return axios(config);
};

export const removeMovieById_api = (id) => {
  const config = {
    ...baseConfig,
    method: 'delete',
    url: `${API_URL}/movies/${id}`,
  };
  return axios(config);
};
