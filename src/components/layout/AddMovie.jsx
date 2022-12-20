import React, { useState } from 'react';
import { ActionModal } from '../ActionModal';
import { ActionResultDialog } from '../ActionResultDialog';

export const AddMovie = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);
  const handleOpenAddDialog = () => setOpenAddDialog(true);
  const handleCloseAddDialog = () => setOpenAddDialog(false);

  const addMovie = (movie) => {
    console.log({ movie }, 'Movie added');
  };

  return (
    <div className="addMovie_container ">
      <div className="addMovie_tag ">
        movies<span style={{ fontWeight: 'bold' }}>DB</span>
      </div>
      <button className="addMovie_btn border" onClick={handleOpenAddModal}>
        +ADD MOVIE
      </button>
      <ActionModal
        open={openAddModal}
        action="ADD"
        handleClose={handleCloseAddModal}
        handleAction={addMovie}
        handleOpenDialog={handleOpenAddDialog}
      />
      <ActionResultDialog
        open={openAddDialog}
        handleClose={handleCloseAddDialog}
        title="CONGRATULATIONS"
        message="The movie has been added to the database successfully"
        type="success"
      />
    </div>
  );
};
