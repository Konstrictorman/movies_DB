import React from 'react';
import {movies} from '../data/movies';
import Card from './Card';

export const Main = () => {
/*
   movies?.forEach((x) => {
      console.log(JSON.stringify(x));
   })
  */ 

  return (
    <div className='layout_grid'>
      {movies.map((x)=> {
         return (<Card key={x.title} title={x.title} year={x.year} genres={x.genders} poster={x.poster}/>)
      })}
    </div>
  )
}
