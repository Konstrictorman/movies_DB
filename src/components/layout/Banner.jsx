import React from 'react'
import { AddMovie } from './AddMovie'
import { SearchMovie } from './SearchMovie'

export const Banner = () => {
  return (
    <div className='layout_banner center'>
      <AddMovie/>
      <SearchMovie/>
    </div>
  )
}
