import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const getMovies_api = () => {
  const config = {
    method: 'get',
    url: `${API_URL}/movies`,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(config);
};
