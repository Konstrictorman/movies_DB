import React from 'react'
import PropTypes from 'prop-types'

const ComboBox = props => {
   const {options, label} = props;
  return (
    <div>      
      <label className='combo_label'>{label}</label>
      <select name="options" id="options" className='combo_select'>
         {options.map((x)=> {
            return (
               <option value={x.id}>{x.label}</option>
            )
         })}
      </select>
    </div>
  )
}

ComboBox.propTypes = {
   options: PropTypes.array.isRequired,
   label: PropTypes.string.isRequired,
}

export default ComboBox