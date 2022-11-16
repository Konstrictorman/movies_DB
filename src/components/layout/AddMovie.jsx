import React, {useState} from 'react';
import { ActionModal } from '../ActionModal';


export const AddMovie = () => {

	const [openModal, setOpenModal] = useState(false);
   const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);	

   const addMovie = () => {
      console.log("Movie added");
   }

  return (
    <div className='addMovie_container '>
      <div className='addMovie_tag '>
         movies<span style={{fontWeight:'bold'}}>DB</span>
      </div>
      <button className='addMovie_btn border' onClick={handleOpenModal}>+ADD MOVIE</button>
      <ActionModal open={openModal} action="ADD" handleClose={handleCloseModal} handleAction={addMovie}/>          
    </div>
  )
}
