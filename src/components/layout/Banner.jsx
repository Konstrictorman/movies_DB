import React, { useContext } from 'react';
import { AddMovie } from './AddMovie';
import { SearchMovie } from './SearchMovie';
import { MovieContext } from '../../App';
import { MovieDetail } from '../MovieDetail';

export const Banner = () => {
  const movieDetail = useContext(MovieContext);

  if (movieDetail) {
    return <MovieDetail movie={movieDetail} />;
  }

  return (
    <div className="layout_banner center">
      <AddMovie />
      <SearchMovie />
    </div>
  );
};
