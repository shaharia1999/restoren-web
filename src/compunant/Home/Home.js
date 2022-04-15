 import React from 'react';
import { Link, Outlet, Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import BrekfastItem from '../Breakfast/BreakFastItem';
import Brteakfast from '../Breakfast/Brteakfast';
 import './Home.css';
 
 const Home = () => {
    //  const {SearcName}=UseHooks();
     const serchFood=(e)=>{
        e.preventDefault()
        const search=e.target[0].value;
        e.target[0].value="";
       
     }
     function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div >
            <Link
              style={{color:match?'#f91944':'black' }}
              to={to}
              {...props}
            >
              {children}
            </Link>
           
          </div>
        );
      }
     return ( 
         <div >
             <section className='home' >
                 <div className="home-banner" >
                     <h1>Best Food Waitinf for Your Bally</h1>
                     <div className='input-box'>
                         <form  onSubmit={serchFood}>
                         <input type="text" name='input'/>
                          <button type='submit'>Search</button>
                          </form>
                     </div>
                 </div>
             </section>
           <section >
               <div className='nasted-route d-flex justify-content-center '>
               <CustomLink to="/breakfast"> Breakfast</CustomLink>
               <CustomLink to="/lance"> Lance</CustomLink>
               <CustomLink to="/dinner"> Dinner</CustomLink>
               </div>
               
               <Outlet>
                   <BrekfastItem></BrekfastItem>
               </Outlet>
         
              
               
              
           </section>
         </div>
     );
 };
 
 export default Home;
