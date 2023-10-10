import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const generateResume = () => {
  const [generatedResume, setGeneratedResume] = useState('');
  const history = useHistory();

  const handleCreateResume = async () => {
    try {
      const education = ''; // import user input
      const experience = ''; // 
      const skills = ''; //

      //API request to your backend to generate the resume
      const response = await axios.post('/api/resumes/generate', {
        education,
        experience,
        skills,
      });

      //use this for the resume from the response
      const generatedResume = response.data.generatedResume;

      // Set the generated resume in state
      setGeneratedResume(generatedResume);

      // redirect to the showResume page with the generated resume data maybe or redirect to /generate
      history.push('/generate', { resumeData: { generatedResume } });
    } catch (error) {
      console.error('Error generating resume:', error);
    }
  };

  return (
    <div>
      {/*inputs for education, experience, skills */}
      <button onClick={handleCreateResume}>Create Personalized Resume</button>
    </div>
  );
};

export default generateResume;
