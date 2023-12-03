// ImagePage.js
import React, { useState, useEffect } from 'react';
import { getRandomImageUrl } from './imageURLs';

const ImagePage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch a new random image URL from the serverless function
    fetch('/api/updateImage')
      .then(response => response.json())
      .then(data => setImageUrl(data.imageUrl))
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div>
      <div className="image-container">
        {imageUrl && <img className="image" src={imageUrl} alt="Random Image" />}
      </div>
    </div>
  );
};

export default ImagePage;
