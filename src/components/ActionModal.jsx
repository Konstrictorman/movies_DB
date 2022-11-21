import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Box } from '@mui/system'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import esLocale from 'date-fns/locale/es'
import { useFormik } from 'formik'
import Checkbox from '@mui/material/Checkbox'
import { genres } from '../data/genres'

const css = {
  color: '#6f6F6F',
  lineHeight: '24px',
  mixBlendMode: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  fontFamily: 'Montserrat',
}

export const ActionModal = ({
  action,
  open,
  handleAction,
  handleClose,
  movie,
}) => {
  const initialValues = {
    title: '',
    releaseDate: null,
    movieUrl: '',
    rating: 0,
    genre: [],
    runtime: 0,
    overview: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      handleAction()
    },
    enableReinitialize: true,
  })

  const handleChange = (name, value) => {
    const val = typeof value === 'string' ? value.split(',') : value
    formik.setFieldValue(name, val)
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
                        handleChange('title', e.target.value)
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
                        value={formik.values.releaseDate}
                        className="modalInput"
                        onChange={(newValue) => {
                          handleChange('releaseDate', newValue)
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
                      value={formik.values.movieUrl}
                      onChange={(e) => {
                        handleChange('movieUrl', e.target.value)
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
                      value={formik.values.rating}
                      onChange={(e) => {
                        handleChange('rating', e.target.value)
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={8}>
                  <div className="modalItem">
                    <label className="modalLabel">GENRE</label>
                    <Select
                      multiple
                      id="genre"
                      type="text"
                      name="genre"
                      size="normal"
                      className="modalInput modalCombo"
                      value={formik.values.genre}
                      onChange={(e) => {
                        handleChange('genre', e.target.value)
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
                            checked={formik.values.genre.indexOf(g.value) > -1}
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
                        handleChange('runtime', e.target.value)
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
                        handleChange('overview', e.target.value)
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
          <div className="modalFooter right">
            <Button
              color="error"
              variant="outlined"
              className="mx-2 modalResetBtn"
              onClick={formik.resetForm}
            >
              RESET
            </Button>
            <Button
              form="movie-form"
              color="error"
              variant="Contained"
              className="mx-2 modalSubmitBtn"
              type="submit"
              //onClick={handleAction}
            >
              SUBMIT
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

ActionModal.propTypes = {
  action: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleAction: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}
