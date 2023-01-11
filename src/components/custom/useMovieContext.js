import React, { useContext } from 'react';
import { MovieContext } from '../../App';

export const useMovieContext = () => {
  const [movieDetail, setMovieDetail] = useContext(MovieContext);

  return [movieDetail, setMovieDetail];
};
