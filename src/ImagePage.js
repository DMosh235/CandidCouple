// ImagePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const ImagePage = () => {
  return (
    <div>
      <Link to="/">Go back to Home</Link>
      <div className="image-container">
        <img
          className="image"
          src="https://example.com/your-image.jpg"  // Replace with the URL of your image
          alt="Centered Image"
        />
      </div>
    </div>
  );
};

export default ImagePage;
