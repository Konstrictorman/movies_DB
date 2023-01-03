import React, { useMemo } from 'react';
import Card from './Card';
import {
  getMovies,
  deleteMovie,
  updateMovie,
} from '../services/moviesServices';

export const Main = ({ handleDetail }) => {
  /*
   movies?.forEach((x) => {
      console.log(JSON.stringify(x));
   })
  */
  const movies = useMemo(() => getMovies(), []);

  const handleEdit = (movie) => {
    console.log('Editing');
    updateMovie(movie);
  };

  const handleDelete = (id) => {
    deleteMovie(id);
    console.log('Deleted');
  };

  return (
    <div className="layout_grid">
      {movies.map((x) => {
        return (
          <Card
            movie={x}
            key={x.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDetail={handleDetail}
          />
        );
      })}
    </div>
  );
};
