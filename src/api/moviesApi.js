import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const getMovies_api = (params) => {
  const config = {
    method: 'get',
    url: `${API_URL}/movies?${params}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(config);
};

export const getMovieById_api = (id) => {
  const config = {
    method: 'get',
    url: `${API_URL}/movies/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(config);
};

export const addMovie_api = (movie) => {
  const config = {
    method: 'post',
    url: `${API_URL}/movies`,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
    data: movie,
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
  };
  return axios(config);
};

export const updateMovie_api = (movie) => {
  const config = {
    method: 'put',
    url: `${API_URL}/movies`,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
    data: movie,
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
  };
  return axios(config);
};

export const removeMovieById_api = (id) => {
  const config = {
    method: 'delete',
    url: `${API_URL}/movies/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
  };
  return axios(config);
};
