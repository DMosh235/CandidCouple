// HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    if (page === 'youtube') {
      // Redirect to the YouTube Shorts link
      window.location.href = 'https://www.youtube.com/shorts/4Fi4DnzfgnY';
    } else {
      navigate(`/${page}`);
    }
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
            Quote Page
          </button>
          <button
            id="button-3"
            className="button-56 fade-in"
            onClick={() => handleButtonClick('youtube')}
          >
            Secret Gift :P
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
