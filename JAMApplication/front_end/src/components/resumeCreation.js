import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from './navBar';

const ResumeCreation = () => {
  const history = useHistory();
  const userID = window.sessionStorage.getItem('userID');
  // Define state variables to store resume data
  const [resumeData, setResumeData] = useState({
    name: '',
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
      if (response.status === 200) {
        console.log('response:', response.status)
        history.push({
          pathname: '/show',
          state: { resumeData },
        }); // Redirect to show
      } else {
        console.error('Resume creation failed.');
      }
    } catch (error) {
      // Any network or server error
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <NavBar />
      
    <div className="resume-creation">
      <h2>Create a Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={resumeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Information:</label>
          <textarea
            name="contactInfo"
            value={resumeData.contactInfo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={resumeData.education}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={resumeData.experience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={resumeData.skills}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Resume</button>
      </form>
    </div>
    </div>
  );
};

export default ResumeCreation;
