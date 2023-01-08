import React from 'react';
import { useFormik } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from 'date-fns/locale/es';
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { genres } from '../data/genres';

const css = {
  color: '#6f6F6F',
  lineHeight: '24px',
  mixBlendMode: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  fontFamily: 'Montserrat',
};

export const ActionForm = ({
  movie,
  action,
  handleAction,
  handleClose,
  handleOpenDialog,
  handleDialogState,
}) => {
  const formik = useFormik({
    initialValues: movie,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    enableReinitialize: true,
  });

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
    handleAction(values);
    handleClose();
    handleReset();
    handleOpenDialog();
  };

  const handleChange = (name, value) => {
    const val = typeof value === 'string' ? value.split(',') : value;
    formik.setFieldValue(name, val);
  };

  const handleReset = () => {
    formik.resetForm();
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
                  onChange={(e) => {
                    handleChange('title', e.target.value);
                  }}
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
                    id="releaseDate"
                    value={formik.values.release_date}
                    className="modalInput"
                    onChange={(newValue) => {
                      handleChange('releaseDate', newValue);
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
                  id="movieUrl"
                  type="text"
                  name="movieUrl"
                  size="normal"
                  className="modalInput"
                  placeholder="http://"
                  inputProps={{
                    style: css,
                  }}
                  value={formik.values.poster_path}
                  onChange={(e) => {
                    handleChange('movieUrl', e.target.value);
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="modalItem">
                <label className="modalLabel">RATING</label>
                <TextField
                  id="rating"
                  type="number"
                  name="rating"
                  size="normal"
                  className="modalInput"
                  inputProps={{
                    style: css,
                  }}
                  value={formik.values.vote_average}
                  onChange={(e) => {
                    handleChange('rating', e.target.value);
                  }}
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
                  onChange={(e) => {
                    handleChange('runtime', e.target.value);
                  }}
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
                  onChange={(e) => {
                    handleChange('overview', e.target.value);
                  }}
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
          //onClick={handleAction}
        >
          SUBMIT
        </Button>
      </div>
    </>
  );
};
