// HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the ImagePage when the button is clicked
    navigate('/image-page');
  };

  return (
    <div>
      <div>
        <div className="title">Candid Couple</div>
        <button className="button-56 fade-in" onClick={handleButtonClick}>
          Button 56
        </button>
      </div>
    </div>
  );
};

export default HomePage;
