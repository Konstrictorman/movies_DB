import React from 'react'

export const AddMovie = () => {
  return (
    <div className='addMovie_container '>
      <div className='addMovie_tag '>
         movies<label style={{fontWeight:'bold'}}>DB</label>
      </div>
      <div className='addMovie_btn border'>+ADD MOVIE</div>
    </div>
  )
}
