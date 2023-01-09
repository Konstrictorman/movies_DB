import React, { useState } from 'react';
import { useFormik } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from 'date-fns/locale/es';
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { genres } from '../data/genres';
import { CustomNumberFormat } from './custom/CustomNumberFormat';
import { format } from 'date-fns';
import { addMovie, updateMovie } from './../services/moviesServices';
import { ActionResultDialog } from './ActionResultDialog';
import ClipLoader from 'react-spinners/ClipLoader';
import { useCustomDialog } from './custom/useCustomDialog';

const css = {
  color: '#6f6F6F',
  lineHeight: '24px',
  mixBlendMode: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  fontFamily: 'Montserrat',
};

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white',
};

export const ActionForm = ({
  movie,
  setMovie,
  action,
  handleClose,
  //handleOpenDialog,
  handleDialogState,
}) => {
  const formik = useFormik({
    initialValues: movie,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
    enableReinitialize: true,
  });

  const [loading, setLoading] = useState(false);
  const [
    dialogState,
    setDialogState,
    handleOpenResultDialog,
    handleCloseResultDialog,
    setActionBtnVisibility,
  ] = useCustomDialog();
  const { d_title, d_message, d_type, d_open, d_actionBtn } = dialogState;

  const handleSubmit = (values) => {
    console.log({ values });
    if (values.id) {
      handleEditMovie(values);
    } else {
      handleAddMovie(values);
    }

    //handleClose();
    formik.resetForm();
    //handleOpenDialog();
  };

  const handleEditMovie = (movie) => {
    console.log('Editing', movie);

    if (movie) {
      setLoading(true);
      updateMovie(movie)
        .then((response) => {
          setDialogState({
            d_type: 'success',
            d_message:
              'The movie has been updated into the database successfully',
            d_title: 'Congratulations',
            d_open: true,
            d_actionBtn: false,
          });
          setMovie(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setDialogState({
            d_type: 'error',
            d_message: `The movie couln't be updated due to error: ${err} : ${err.response.data.messages[0]}`,
            d_title: 'Bad news',
            d_open: true,
            d_actionBtn: false,
          });
          setLoading(false);
        });
      /*
      setLoading(false);
      
      handleOpenResultDialog();
      */
    }
  };

  const handleAddMovie = (movie) => {
    console.log('adding', movie);
    if (movie) {
      addMovie(movie)
        .then((response) => {
          setDialogState({
            d_type: 'success',
            d_message: 'The movie has been added to the database successfully',
            d_title: 'Congratulations',
            d_open: true,
            d_actionBtn: false,
          });
        })
        .catch((err) => {
          console.log({ err });
          setDialogState({
            d_type: 'error',
            d_message: `The movie couln't be added due to error: ${err} : ${err.response?.data?.messages[0]}`,
            d_title: 'Bad news',
            d_open: true,
            d_actionBtn: false,
          });
          setLoading(false);
        });
    }
  };

  const handleChange = (name, value) => {
    //const val = typeof value === 'string' ? value.split(',') : value;
    let val = value;
    if (name === 'release_date') {
      val = format(value, 'yyyy-MM-dd');
    }
    formik.setFieldValue(name, val);
  };

  const secondaryBtn =
    action === 'ADD' ? (
      <Button
        color="error"
        variant="outlined"
        className="mx-2 btnCancel"
        onClick={formik.resetForm}
      >
        RESET
      </Button>
    ) : (
      <Button
        color="error"
        variant="outlined"
        className="mx-2 btnCancel"
        onClick={handleClose}
      >
        CLOSE
      </Button>
    );

  if (loading) {
    return (
      <>
        <ClipLoader size={150} loading={loading} cssOverride={override} />
      </>
    );
  }

  return (
    <>
      <div className="modalFormContainer">
        <form onSubmit={formik.handleSubmit} id="movie-form">
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <div className="modalItem">
                <label className="modalLabel">TITLE</label>
                <TextField
                  id="title"
                  type="text"
                  name="title"
                  size="normal"
                  className="modalInput"
                  inputProps={{
                    style: css,
                  }}
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="modalItem">
                <label className="modalLabel">RELEASE DATE</label>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={esLocale}
                >
                  <DatePicker
                    id="release_date"
                    value={formik.values.release_date}
                    className="modalInput"
                    name="release_date"
                    inputFormat="yyyy-MM-dd"
                    onChange={(newValue) => {
                      handleChange('release_date', newValue);
                    }}
                    inputProps={{
                      style: css,
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ svg: { color: '#555555' } }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="modalItem">
                <label className="modalLabel">MOVIE URL</label>
                <TextField
                  id="poster_path"
                  type="text"
                  name="poster_path"
                  size="normal"
                  className="modalInput"
                  placeholder="http://"
                  inputProps={{
                    style: css,
                  }}
                  value={formik.values.poster_path}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="modalItem">
                <label className="modalLabel">RATING</label>
                <TextField
                  id="vote_average"
                  type="number"
                  name="vote_average"
                  size="normal"
                  className="modalInput"
                  inputProps={{
                    style: css,
                    step: 0.1,
                    inputcomponent: CustomNumberFormat,
                  }}
                  value={formik.values.vote_average}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="modalItem">
                <label className="modalLabel">GENRES</label>
                <Select
                  multiple
                  id="genres"
                  type="text"
                  name="genres"
                  size="normal"
                  className="modalInput modalCombo"
                  value={formik.values.genres}
                  onChange={(e) => {
                    handleChange('genres', e.target.value);
                  }}
                  placeholder="Select Genre"
                  renderValue={(selected) => selected.join(', ')}
                  style={{
                    color: '#6F6F6F',
                    fontWeight: 400,
                    fontSize: '20px',
                    fontFamily: 'Montserrat',
                  }}
                  inputProps={{
                    MenuProps: {
                      MenuListProps: {
                        sx: {
                          backgroundColor: '#232323',
                          color: '#555555',
                        },
                      },
                    },
                  }}
                >
                  {genres.map((g) => (
                    <MenuItem key={g.name} value={g.value}>
                      <Checkbox
                        checked={formik.values.genres?.indexOf(g.value) > -1}
                      />
                      {g.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="modalItem">
                <label className="modalLabel">RUNTIME</label>
                <TextField
                  id="runtime"
                  type="number"
                  name="runtime"
                  size="normal"
                  className="modalInput"
                  placeholder="minutes"
                  inputProps={{
                    style: css,
                  }}
                  value={formik.values.runtime}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="modalItem">
                <label className="modalLabel">OVERVIEW</label>
                <TextField
                  id="overview"
                  type="text"
                  name="overview"
                  size="normal"
                  className="modalInput"
                  minRows={5}
                  maxRows={5}
                  multiline={true}
                  placeholder="Movie description"
                  inputProps={{
                    style: css,
                  }}
                  value={formik.values.overview}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="modalFooter right">
        {secondaryBtn}
        <Button
          form="movie-form"
          color="error"
          variant="Contained"
          className="mx-2 btnSubmit"
          type="submit"
          //onClick={handleEdit}
        >
          SUBMIT
        </Button>
      </div>
      <ActionResultDialog
        open={d_open}
        handleClose={handleCloseResultDialog}
        title={d_title}
        message={d_message}
        type={d_type}
      />
    </>
  );
};
