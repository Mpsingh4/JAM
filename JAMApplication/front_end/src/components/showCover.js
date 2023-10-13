import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navBar';
import './comp.css'
import NavBar2 from './navbar2';


const ShowCover = ({ coverletterData }) => {
  const location = useLocation();
  console.log('location:', location);
  return (
    <div>
      <NavBar2 />
      <div>
      <body className="page-body">
      <div className="banner">
      <div className='show-page-body-text'>
      <h1 className='show-title'>Your Tailored Coverletter: </h1>
        <p className='showres-text' >{location.state.response}</p>
        <button className='download'>Download PDF</button>
      </div>
      </div>
      </body>
      </div>  
    </div>
  );
};

export default ShowCover;
