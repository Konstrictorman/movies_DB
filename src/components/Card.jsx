import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, Rating } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMovieContext } from './custom/useMovieContext';

const css = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    backgroundColor: '#232323',
    color: 'white',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      color: '#232323',
      backgroundColor: '#232323',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};

const Card = (props) => {
  const { movie, handleOpenEditModal, handleOpenDeleteDialog } = props;
  const [showBtn, setShowBtn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [movieDetail, setMovieDetail] = useMovieContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCardClick = (event) => {
    setMovieDetail(movie);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowBtn(false);
  };

  return (
    <div className="card">
      <div
        style={{ backgroundImage: `url('${movie.poster_path}')` }}
        className="card_poster"
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={handleClose}
        onClick={handleCardClick}
      >
        {showBtn && (
          <>
            <IconButton
              style={{ color: 'white' }}
              className="cardButton"
              size="small"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={css}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleOpenEditModal} className="cardMenuItem">
                Edit
              </MenuItem>
              <MenuItem
                onClick={handleOpenDeleteDialog}
                className="cardMenuItem"
              >
                Delete
              </MenuItem>
            </Menu>
          </>
        )}
      </div>

      <div className="card_top">
        <div className="card_title">{movie.title}</div>
        <div className="card_year">{movie.release_date}</div>
      </div>
      <div className="left">
        <Rating
          name="rating"
          value={movie.vote_average}
          precision={0.1}
          readOnly
          size="small"
          max={10}
        />
      </div>
      <div className="card_genders">{movie.genres.join(',  ')}</div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Card;
