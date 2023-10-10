import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import NavBar from './navBar';
import "./comp.css"

const ResumeCreation = () => {
  const history = useHistory();
  const location = useLocation();
  const { user } = location.state || {};
  const userID = window.sessionStorage.getItem('userID');

  // Define state variables to store resume data
  const [resumeData, setResumeData] = useState({
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
    setResumeData({
      ...resumeData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the resumeData to the backend for storage
      const response = await axios.post('http://localhost:8080/api/resumes/create', resumeData);

      // Check for response
      
        console.log('response:', response.status)
        history.push({
          pathname: '/show',
          state: { resumeData },
        }); // Redirect to show

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
      <h2>Create a Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input className='create-res-textbox'
            type="text"
            name="name"
            value={resumeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Information:</label>
          <textarea className='create-res-textbox'
            name="contactInfo"
            value={resumeData.contactInfo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea className='create-res-textbox'
            name="education"
            value={resumeData.education}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea className='create-res-textbox'
            name="experience"
            value={resumeData.experience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea className='create-res-textbox'
            name="skills"
            value={resumeData.skills}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className='create-res-submitbox' type="submit">Create Resume</button>
      </form>
    </div>
    </div>
    </body>  
    </div>
  );
};

export default ResumeCreation;
