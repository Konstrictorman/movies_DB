import React from 'react'

export const AddMovie = () => {
  return (
    <div className='addMovie_container '>
      <div className='addMovie_tag '>
         movies<span style={{fontWeight:'bold'}}>DB</span>
      </div>
      <button className='addMovie_btn border'>+ADD MOVIE</button>
    </div>
  )
}
