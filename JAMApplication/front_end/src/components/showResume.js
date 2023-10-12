import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navBar';
import './comp.css'
import NavBar2 from './navbar2';


const ShowResume = ({ resumeData }) => {
  const location = useLocation();
  console.log('location:', location);
  return (
    <div>
      <NavBar2 />
      <body className="page-body">
      <div className="banner">
      <div className='show-page-body-text'>
      <h1 className='show-title'>Your Job Winning Resume: </h1>
        <p className='showres-text'>{location.state.response}</p>
        <button className='download'>Download PDF</button>
      </div>
      </div>
      </body>  
    </div>
  );
};

export default ShowResume;

// make sure to redirect if data is empty/null
// make a backend route and pull from that. 
