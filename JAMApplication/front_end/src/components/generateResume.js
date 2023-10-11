import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const GenerateResume = () => {
  const [generatedResume, setGeneratedResume] = useState('');
  const history = useHistory();

  const handleGenerateResume = async () => {
    try {
      const education = ''; // use actual user input
      const experience = ''; //
      const skills = ''; //

      const response = await axios.post('/api/resumes/generate', {
        education,
        experience,
        skills,
      });

      const generatedResume = response.data.generatedResume;

      setGeneratedResume(generatedResume);

      history.push('/generate', { generatedResume });
    } catch (error) {
      console.error('Error generating resume:', error);
    }
  };

  return (
    <div>
      {/*inputs for education, experience, skills */}
      <button onClick={handleGenerateResume}>Generate Resume</button>
    </div>
  );
};

export default GenerateResume;
