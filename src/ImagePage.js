// ImagePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the shared CSS file

const ImagePage = () => {
  return (
    <div>
      <Link to="/" className="back-link">
        Go back to Home
      </Link>
      <div className="image-frame">
        <img
          className="hidden-image"
          src="https://bloximages.newyork1.vip.townnews.com/miltonindependent.com/content/tncms/assets/v3/editorial/c/f8/cf87e12c-cf88-11eb-b67d-631a1042b820/60cb77c6e6772.image.jpg?crop=1568%2C823%2C0%2C249&resize=1200%2C630&order=crop%2Cresize"  // Replace with the URL of your image
          alt="Pic of Us"
        />
      </div>
    </div>
  );
};

export default ImagePage;
