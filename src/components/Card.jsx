import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
   const {title, genres, year, poster} = props;

   

  return (
    <div className='card'>
      <img src={poster} alt={title} className="card_poster"/>
      <div className='card_top'>
         <div className='card_title'>{title}</div>
         <div className='card_year'>{year}</div>
      </div>
      <div className='card_genders'>{genres.join(',  ')}</div>
   </div>
    
  )
}

Card.propTypes = {
   title: PropTypes.string.isRequired,
   year: PropTypes.string.isRequired,
   genres: PropTypes.array.isRequired,
   poster: PropTypes.string.isRequired
}


export default Card;
