import React from 'react';
import { genres } from './../data/genres';
import SearchIcon from '@mui/icons-material/Search';

export const MovieDetail = ({ movie }) => {
  console.log({ movie });
  return (
    <div className="movie_detail_container">
      <div>
        <div className="movie_detail_top">
          <span>Movies_DB</span>
          <SearchIcon className="movie_detail_search" />
        </div>
        <div className="movie_detail_main">
          <diV>
            <img src={movie.poster} className="movie_detail_poster"></img>
          </diV>
          <div className="movie_detail">
            <span>{movie.title}</span>
            <br />
            <span>{movie.genres.join(',  ')}</span>
            <br />
            <span className="movie_detail_year">{movie.year}</span>
            <span className="movie_detail_year movie_detail_runtime">
              {movie.runtime}
            </span>
            <br />
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
