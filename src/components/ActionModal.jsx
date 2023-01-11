import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { getMovieById } from '../services/moviesServices';
import { BeatLoader } from 'react-spinners';
import { ActionForm } from './ActionForm';
import { useMovieContext } from './custom/useMovieContext';

export const ActionModal = ({
  action,
  open,
  handleClose,
  handleOpenDialog,
  handleDialogState,
}) => {
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useMovieContext();
  const initialValues = {
    title: '',
    release_date: null,
    poster_path: '',
    vote_average: 0.0,
    genres: [],
    runtime: 0,
    overview: '',
  };
  const [movie, setMovie] = useState(initialValues);

  useEffect(() => {
    const getMovie = async (id) => {
      setLoading(true);
      try {
        if (id) {
          console.log({ id });
          const data = await getMovieById(id);
          setMovie({
            ...data,
          });
          console.log({ data });
        }
        setLoading(false);
      } catch (e) {
        console.log(e.message);
        setLoading(false);
      }
    };

    getMovie(movieDetail?.id);
  }, [movieDetail]);

  let children = <BeatLoader color="#36d7b7" className="modalSpinner" />;
  if (!loading) {
    children = (
      <ActionForm
        movie={movie}
        setMovie={setMovie}
        action={action}
        handleClose={handleClose}
        handleOpenDialog={handleOpenDialog}
        handleDialogState={handleDialogState}
      />
    );
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalWrapper"
      >
        <Box className="modalBox">
          <div className="modalHeader">
            <div className="right"></div>

            <IconButton className="right" onClick={handleClose}>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </div>
          <span className="modalTitle">{action} MOVIE</span>

          {children}
        </Box>
      </Modal>
    </>
  );
};

ActionModal.propTypes = {
  action: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
