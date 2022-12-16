import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, Rating } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ActionResultDialog } from './ActionResultDialog';
import { ActionModal } from './ActionModal';

const Card = (props) => {
  const { movie, handleEdit, handleDelete } = props;
  const [showBtn, setShowBtn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowBtn(false);
  };

  const onDelete = () => {
    handleDelete(movie.id);
    handleClose();
    handleCloseDialog();
  };

  return (
    <div className="card">
      <div
        style={{ backgroundImage: `url('${movie.poster}')` }}
        className="card_poster"
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={() => handleClose()}
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
              PaperProps={{
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
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleOpenModal} className="cardMenuItem">
                Edit
              </MenuItem>
              <MenuItem onClick={handleOpenDialog} className="cardMenuItem">
                Delete
              </MenuItem>
            </Menu>
          </>
        )}
      </div>

      <div className="card_top">
        <div className="card_title">{movie.title}</div>
        <div className="card_year">{movie.year}</div>
      </div>
      <div className="left">
        <Rating
          name="rating"
          value={movie.rating}
          precision={0.1}
          readOnly
          size="small"
        />
      </div>
      <div className="card_genders">{movie.genres.join(',  ')}</div>
      <ActionResultDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="DELETE MOVIE"
        message="Are you sure you want to delete this movie?"
      >
        <Button
          onClick={onDelete}
          autoFocus
          className="btnSubmit"
          style={{ marginRight: '30px', marginBottom: '30px' }}
        >
          CONFIRM
        </Button>
      </ActionResultDialog>
      <ActionModal
        open={openModal}
        action="EDIT"
        handleClose={handleCloseModal}
        handleAction={handleEdit}
        handleOpenDialog={handleOpenDialog}
        movieId={movie.id}
      />
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Card;
