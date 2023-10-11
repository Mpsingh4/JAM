import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navBar';
import './comp.css'


const ShowResume = ({ resumeData }) => {
  const location = useLocation();
  console.log('location:', location);
  return (
    <div>
      <NavBar />
      <body className="page-body">
      <div className="banner">
      {/* <h2 className='page-body-title'>Show Resume</h2> */}
      <div className='show-page-body-text'>
        <p>{location.state.response}</p>
        {/* <p>Name: {location.state.resumeData.name}</p>
        <p>Contact Info: {location.state.resumeData.contactInfo}</p>
        <p>Education: {location.state.resumeData.education}</p>
        <p>Experience: {location.state.resumeData.experience}</p>
        <p>Skills: {location.state.resumeData.skills}</p>  */}
        {/* if more stuff is needed*/}
      </div>
      </div>
      </body>  
    </div>
  );
};

export default ShowResume;

// make sure to redirect if data is empty/null
// make a backend route and pull from that. 
