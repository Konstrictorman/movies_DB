import React from 'react'
import { Banner } from './Banner'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <div >
      <Banner/>
      <div className='center layout_main'>
         {children}
      </div>
      <Footer/>
    </div>
  )
}
