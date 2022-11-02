import React, { useMemo } from 'react';
import ComboBox from './ComboBox';
import MenuItem from './MenuItem';

export const Menu = () => {

   const options = useMemo(() => {
      const arr = [
         {
            id:1,
            label:'RELEASE DATE',
         },
         {
            id:2,
            label:'ALPHABETICALLY',
         }
      ]
      return arr;
   }, [])

  return (
    <div className="menu_container">

      <MenuItem label="ALL"/>
      <MenuItem label="DOCUMENTARY"/>
      <MenuItem label="COMEDY"/>
      <MenuItem label="HORROR"/>
      <MenuItem label="CRIME"/>

      <div className='menu_right menu_combo'>
         <ComboBox label="SORT BY" options={options}/>
      </div>
    </div>
  );
};
