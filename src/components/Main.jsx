import React from 'react';
import {movies} from '../data/movies';
import Card from './Card';

export const Main = () => {

   movies?.forEach((x) => {
      console.log(JSON.stringify(x));
   })
   

  return (
    <div className='layout_grid'>
      {movies.map((x)=> {
         return (<Card title={x.title} year={x.year} genders={x.genders} poster={x.poster}/>)
      })}
    </div>
  )
}
