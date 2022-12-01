import React, { useMemo } from 'react';
import Card from './Card';
import { getMovies } from './../services/getMovies';

export const Main = () => {
  /*
   movies?.forEach((x) => {
      console.log(JSON.stringify(x));
   })
  */
  const movies = useMemo(() => getMovies(), []);

  return (
    <div className="layout_grid">
      {movies.map((x) => {
        return <Card movie={x} key={x.id} />;
      })}
    </div>
  );
};
