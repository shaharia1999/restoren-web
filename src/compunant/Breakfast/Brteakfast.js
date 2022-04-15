import React, { useEffect, useState } from 'react';
import UseHooks from '../../Hooks/UseHooks';
import BrekfastItem from './BreakFastItem';
import './Break.css'
import { Link } from 'react-router-dom';

const Brteakfast = () => {
    const datas=UseHooks();
   const result= datas.filter(data=>data.name===('brakfast'))
    return (
      <div>
              <div className='items'>
           {
               result.map(item=><BrekfastItem  key={item.id} item={item}></BrekfastItem>)
           }
           
           </div>
           <div className='d-flex justify-content-center '><Link  className ='fs-2 chose'to='/card'>chacked your Food</Link></div>
           </div>
      
    );
};

export default Brteakfast;