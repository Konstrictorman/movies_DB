import React from 'react';
import { genres } from './../data/genres';
import SearchIcon from '@mui/icons-material/Search';

export const MovieDetail = ({ movie, handleDetail }) => {
  const handleClick = () => {
    handleDetail(null);
  };

  return (
    <div className="movie_detail_container">
      <div>
        <div className="movie_detail_top">
          <span>Movies_DB</span>
          <SearchIcon className="movie_detail_search" onClick={handleClick} />
        </div>
        <div className="movie_detail_main">
          <div>
            <img src={movie.poster_path} className="movie_detail_poster"></img>
          </div>
          <div className="movie_detail">
            <div className="movie_detail_title">
              <span>{movie.title}</span>
              <div className="movie_detail_rating">{movie.vote_average}</div>
            </div>
            <span className="movie_detail_genres">
              {movie.genres.join(',  ')}
            </span>
            <br />
            <div className="movie_detail_year">
              <span>{movie.release_date}</span>
              <span className="movie_detail_year movie_detail_runtime">
                {movie.runtime} mins.
              </span>
            </div>
            <p className="movie_detail_overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
