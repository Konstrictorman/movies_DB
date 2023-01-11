import React, { useContext } from 'react';
import { AddMovie } from './AddMovie';
import { SearchMovie } from './SearchMovie';
import { MovieDetail } from '../MovieDetail';
import { useMovieContext } from '../custom/useMovieContext';

export const Banner = () => {
  const [movieDetail, setMovieDetail] = useMovieContext();

  if (movieDetail) {
    return (
      <>
        <MovieDetail movie={movieDetail} handleDetail={setMovieDetail} />
        <div className="movie_detail_bottom">{''}</div>
      </>
    );
  }

  return (
    <div className="layout_banner center">
      <AddMovie />
      <SearchMovie />
    </div>
  );
};
