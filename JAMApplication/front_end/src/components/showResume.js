import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './navBar';


const ShowResume = ({ resumeData }) => {
  const location = useLocation();
  console.log('location:', location);
  return (
    <div>
      <NavBar />
      <body className="page-body">
      <h2 className='page-body-title'>Show Resume</h2>
      <div className='page-body-text'>
        <p>Name: {location.state.resumeData.name}</p>
        <p>Contact Info: {location.state.resumeData.contactInfo}</p>
        <p>Education: {location.state.resumeData.education}</p>
        <p>Experience: {location.state.resumeData.experience}</p>
        <p>Skills: {location.state.resumeData.skills}</p> 
        {/* if more stuff is needed*/}
      </div>
      </body>  
    </div>
  );
};

export default ShowResume;

// make sure to redirect if data is empty/null
