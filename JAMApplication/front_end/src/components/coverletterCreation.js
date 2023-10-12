import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import NavBar from './navBar';
import "./comp.css"

const CoverletterCreation = () => {
  const history = useHistory();
  const location = useLocation();
  const { user } = location.state || {};
  const userID = window.sessionStorage.getItem('userID');

  // Define state variables to store resume data
  const [coverletterData, setcoverletterData] = useState({
    name: user ? user.name: "",
    contactInfo: '',
    education: '',
    experience: '',
    skills: '',
    userID
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setcoverletterData({
      ...coverletterData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send the coverletterData to the backend for storage
      const response = await axios.post(
        'http://localhost:8080/api/coverletters/generate', // Backend route for creating cover letters
        coverletterData
      );
  
      // Check for response
      console.log('response:', response.status);
      history.push({
        pathname: '/showCover',
        state: { response: response.data.data }, // Sending the generated cover letter to the showCover component
      }); // Redirect to showCover
    } catch (error) {
      // Any network or server error
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <NavBar />
    <body className="page-body">
    <div className="banner">
    <div className="resume-creation">
      <h2 className='cover-letter-title'>Create a Cover Letter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name:</label>
          <textarea className='create-res-textbox'
            name="contactInfo"
            value={coverletterData.contactInfo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Title:</label>
          <textarea className='create-res-textbox'
            name="education"
            value={coverletterData.education}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role Description:</label>
          <textarea className='create-res-textbox'
            name="experience"
            value={coverletterData.experience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Required/Highlight Skills:</label>
          <textarea className='create-res-textbox'
            name="skills"
            value={coverletterData.skills}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className='create-res-submitbox' type="submit">Create Cover Letter</button>
      </form>
    </div>
    </div>
    </body>  
    </div>
  );
};

export default CoverletterCreation;
