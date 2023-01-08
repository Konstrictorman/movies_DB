import React, { useEffect, useState } from 'react';
import Card from './Card';
import {
  getMovies,
  deleteMovie,
  updateMovie,
} from '../services/moviesServices';
import ClipLoader from 'react-spinners/ClipLoader';
import { useMovieContext } from './custom/useMovieContext';

export const Main = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useMovieContext();

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'white',
  };

  useEffect(() => {
    const seekForMovies = async () => {
      setLoading(true);
      try {
        const movies = await getMovies();
        setMovies(movies?.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    seekForMovies();
  }, []);
  console.log({ movies });

  const handleEdit = (movie) => {
    console.log('Editing');
    updateMovie(movie);
  };

  const handleDelete = (id) => {
    deleteMovie(id);
    console.log('Deleted');
  };

  if (loading) {
    return (
      <>
        <ClipLoader size={150} loading={loading} cssOverride={override} />
      </>
    );
  }

  return (
    <div className="layout_grid">
      {movies?.map((x) => {
        return (
          <Card
            movie={x}
            key={x.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDetail={setMovieDetail}
          />
        );
      })}
    </div>
  );
};
