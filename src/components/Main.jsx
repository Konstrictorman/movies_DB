import React, { useEffect, useState } from 'react';
import Card from './Card';
import {
  getMovies,
  deleteMovie,
  updateMovie,
} from '../services/moviesServices';
import { ActionResultDialog } from './ActionResultDialog';
import ClipLoader from 'react-spinners/ClipLoader';
import { useMovieContext } from './custom/useMovieContext';
import { ActionModal } from './ActionModal';
import { Button } from '@mui/material';
import { useCustomDialog } from './custom/useCustomDialog';

export const Main = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useMovieContext();
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => {
    setMovieDetail(null);
    setOpenEditModal(false);
  };

  const defaultValues = {
    dTitle: 'DELETE MOVIE',
    dMessage: 'Are you sure you want to delete this movie?',
    dType: 'confirmation',
    dOpen: false,
    d_actionBtn: true,
  };

  const [
    dialogState,
    setDialogState,
    handleOpenResultDialog,
    handleCloseResultDialog,
    setActionBtnVisibility,
  ] = useCustomDialog(defaultValues);

  const { dTitle, dMessage, dType, dOpen, d_actionBtn } = dialogState;
  //console.log(dTitle, dMessage, dType, dOpen, d_actionBtn);
  /*
  const handleOpenDeleteDialog = () => setOpenDeleteDialog(true);
  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false);
*/
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'white',
  };

  useEffect(() => {
    const seekForMovies = async () => {
      console.log('Seeking form movies');
      setLoading(true);
      try {
        const movies = await getMovies(limit, offset);
        setMovies(movies?.data);
        setDialogState(defaultValues), console.log('movies found:', movies);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    seekForMovies();
  }, [limit, offset]);

  const handleDelete = (id) => {
    console.log('Deleting ', id);
    handleCloseResultDialog();
    if (id) {
      setLoading(true);
      deleteMovie(id)
        .then((response) => {
          setDialogState({
            dType: 'success',
            dMessage:
              'The movie has been deleted from the database successfully',
            dTitle: 'Congratulations',
            dOpen: true,
            d_actionBtn: false,
          });
          const index = movies.findIndex((x) => x.id === id);
          console.log(index);
          movies.splice(index, 1);
          setMovieDetail(null);
          setLoading(false);
        })
        .catch((err) => {
          console.log({ err });
          setDialogState({
            dType: 'error',
            dMessage: `The movie couln't be deleted due to error: ${err} : ${err.response?.data?.messages[0]}`,
            dTitle: 'Bad news',
            dOpen: true,
            d_actionBtn: false,
          });
          setLoading(false);
        });
    }
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
            handleOpenEditModal={handleOpenEditModal}
            handleOpenDeleteDialog={handleOpenResultDialog}
          />
        );
      })}
      <ActionResultDialog
        open={dOpen}
        handleClose={handleCloseResultDialog}
        title={dTitle}
        message={dMessage}
        type={dType}
      >
        {d_actionBtn && (
          <Button
            onClick={() => handleDelete(movieDetail?.id)}
            autoFocus
            className="btnSubmit"
            style={{ marginRight: '30px', marginBottom: '30px' }}
          >
            CONFIRM
          </Button>
        )}
      </ActionResultDialog>

      <ActionModal
        open={openEditModal}
        action="EDIT"
        handleClose={handleCloseEditModal}
        //handleOpenDialog={handleOpenResultDialog}
        //movieId={movieDetail?.id}
      />
    </div>
  );
};
