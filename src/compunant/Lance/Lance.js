import React from 'react';
import { Link } from 'react-router-dom';
import UseHooks from '../../Hooks/UseHooks';
import LoginItems from './LoginItems';
const Lance = () => {
        const datas=UseHooks();
   const result= datas.filter(data=>data.name===('lance'))
    return (
        <div>
              <div className='items'>
           {
               result.map(item=><LoginItems item={item} key={item.id}></LoginItems>)
           }
        </div>
        <div className='d-flex justify-content-center '><Link  className ='fs-2 chose'to='/card'>chacked your Food</Link></div>
        </div>
       
      
 
    );
};

export default Lance;