import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navBar';
import './comp.css'


const ShowCover = ({ coverletterData }) => {
  const location = useLocation();
  console.log('location:', location);
  return (
    <div>
      <NavBar />
      <body className="page-body">
      <div className="banner">
      <div className='show-page-body-text'>
        <p>{location.state.response}</p>
      </div>
      </div>
      </body>  
    </div>
  );
};

export default ShowCover;
