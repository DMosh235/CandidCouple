// HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    // Navigate to the corresponding page when a button is clicked
    navigate(`/${page}`);
  };

  return (
    <div>
      <div>
        <div className="title">Candid Couple</div>
        <div className="button-container">
          <button
            id="button-1"
            className="button-56 fade-in"
            onClick={() => handleButtonClick('image-page')}
          >
            Daily Pic
          </button>
          <button
            id="button-2"
            className="button-56 fade-in"
            onClick={() => handleButtonClick('quotes')}
          >
            Quotes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
