import React, { useState } from 'react';
import { ActionModal } from '../ActionModal';
import { ActionResultDialog } from '../ActionResultDialog';

export const AddMovie = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const addMovie = (movie) => {
    console.log({ movie }, 'Movie added');
  };

  return (
    <div className="addMovie_container ">
      <div className="addMovie_tag ">
        movies<span style={{ fontWeight: 'bold' }}>DB</span>
      </div>
      <button className="addMovie_btn border" onClick={handleOpenModal}>
        +ADD MOVIE
      </button>
      <ActionModal
        open={openModal}
        action="ADD"
        handleClose={handleCloseModal}
        handleAction={addMovie}
        handleOpenDialog={handleOpenDialog}
      />
      <ActionResultDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="CONGRATULATIONS"
        message="The movie has been added to the database successfully"
        type="success"
      />
    </div>
  );
};
