import React from 'react';

export const SearchMovie = () => {
  return (
    <div className='searchMovie_container'>

        <input className='searchMovie_input' type="text" placeholder="What do you want to search?" />

      <div className='searchMovie_button'>SEARCH</div>
    </div>
  );
};
