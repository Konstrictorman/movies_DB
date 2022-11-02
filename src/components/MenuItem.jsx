import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = props => {
   const {label} = props;

  return (
   <div className='menu_item'>{label}</div>
  )
}

MenuItem.propTypes = {
   label: PropTypes.string.isRequired
}

export default MenuItem