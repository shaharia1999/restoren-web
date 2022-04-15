import React from 'react';
import { Link } from 'react-router-dom';
import UseHooks from '../../Hooks/UseHooks';
import DinnerItems from './DinnerItems';

const Dinner = () => {
   
    const datas=UseHooks();
    const result= datas.filter(data=>data.name===('dinner'))
     return (
          <div>
               <div className='items'>
            {
                result.map(item=><DinnerItems item={item} key={item.id}></DinnerItems>)
            }
         </div>
         <div className='d-flex justify-content-center '><Link  className ='fs-2 chose'to='/card'>chacked your Food</Link></div>
         </div>
        
       
  
     );
 };

export default Dinner;