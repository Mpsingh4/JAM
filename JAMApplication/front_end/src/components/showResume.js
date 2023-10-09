import React from 'react';

const ShowResume = ({ resumeData }) => {
  return (
    <div>
      <h2>Show Resume</h2>
      <div>
        <p>Name: {resumeData.name}</p>
        <p>Contact Info: {resumeData.contactInfo}</p>
        <p>Education: {resumeData.education}</p>
        <p>Experience: {resumeData.experience}</p>
        <p>Skills: {resumeData.skills}</p>
        {/* if more stuff is needed */}
      </div>
    </div>
  );
};

export default ShowResume;
