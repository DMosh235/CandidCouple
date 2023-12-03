// ImagePage.js
import React, { useState, useEffect } from 'react';
import { getRandomImageUrl } from './imageURLs';

const ImagePage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Check the last accessed date stored in local storage
        const storedDate = localStorage.getItem('lastAccessedDate');
        
        // Get the current date in the format "YYYY-MM-DD"
        const currentDate = new Date().toISOString().split('T')[0];

        // If the stored date is different from the current date, fetch a new random image
        if (storedDate !== currentDate) {
          const randomImageUrl = getRandomImageUrl(); // Use your function to get a random image URL
          setImageUrl(randomImageUrl);

          // Save the current date in local storage
          localStorage.setItem('lastAccessedDate', currentDate);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();

    // Optional: If you want to refresh the image periodically, you can set an interval
    const intervalId = setInterval(fetchImage, 60 * 1000); // Check every minute

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <div className="image-container">
        {imageUrl && <img className="image" src={imageUrl} alt="Random Image" />}
      </div>
    </div>
  );
};

export default ImagePage;
