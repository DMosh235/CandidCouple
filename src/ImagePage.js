// ImagePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImagePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  // Function to get the day of the year
  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day + 1; // Add 1 to make it 1-365
  };

  // Function to get a random image URL based on the date
  const getRandomImageUrlBasedOnDate = (date) => {
    const imageUrls = [
      'https://i.imgur.com/9Vk4iS9.jpg',
      'https://i.imgur.com/EzGwfdb.jpg',
      'https://i.imgur.com/Djx6gYv.jpg',
      'https://i.imgur.com/aiMc7bc.jpg',
      'https://i.imgur.com/OT0d72f.jpg',
      'https://i.imgur.com/LrMUY9o.jpg',
      'https://i.imgur.com/og8gcHk.jpg',
      'https://i.imgur.com/urV5Je3.jpg',
      'https://i.imgur.com/DF2S3FS.jpg',
      'https://i.imgur.com/Y8g4jv7.jpg',
      'https://i.imgur.com/8hqd6cA.jpg',
      'https://i.imgur.com/pu76vwV.jpg',
      'https://i.imgur.com/wC1NMTo.jpg',
      'https://i.imgur.com/m53r6oI.jpg',
      'https://i.imgur.com/kQp9tPe.jpg',
      'https://i.imgur.com/aOIItA5.jpg',
      'https://i.imgur.com/og8gcHk.jpg',
      'https://i.imgur.com/QXh1MiD.jpg',
      'https://i.imgur.com/D4bEUjM.jpg',
      'https://i.imgur.com/68yOKmX.jpg',
      'https://i.imgur.com/8GD6nzg.jpg',
      'https://i.imgur.com/xykf59X.jpg',
      'https://i.imgur.com/g3tVtJd.jpg',
      'https://i.imgur.com/PY3e3On.jpg',
      'https://i.imgur.com/6JZv0rf.jpg',
      'https://i.imgur.com/nHi5uUM.jpg',
      'https://i.imgur.com/PfSoD5E.jpg',
      'https://i.imgur.com/XGSR280.jpg',
      'https://i.imgur.com/xrbV8Kq.jpg',
      'https://i.imgur.com/J7bC6PS.jpg',
      'https://i.imgur.com/8T730xd.jpg',
      'https://i.imgur.com/JwddzE3.jpg',
      'https://i.imgur.com/V90rhek.jpg',
      'https://i.imgur.com/g3tVtJd.jpg',
      'https://i.imgur.com/68yOKmX.jpg',
      'https://i.imgur.com/8GD6nzg.jpg',
    ];
  
    const dayOfYear = getDayOfYear(date);
    const index = dayOfYear % imageUrls.length;
  
    return imageUrls[index];
  };
  

  const updateCountdown = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);

    const timeDiff = midnight - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    setCountdown({ hours, minutes, seconds });
  };

  useEffect(() => {
    const fetchImage = () => {
      try {
        const currentDate = new Date();
        const imageUrl = getRandomImageUrlBasedOnDate(currentDate);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(countdownInterval);
    };
  }, [getRandomImageUrlBasedOnDate]);

  return (
    <div>
      <div className="image-container">
        {imageUrl ? (
          <img
            className="image"
            src={imageUrl}
            alt={`Daily Image - ${imageUrl}`}
            onError={(e) => {
              console.error('Error loading image:', e);
              setImageUrl(''); // Clear the image URL on error
            }}
          />
        ) : (
          <p>Error loading image</p>
        )}
      </div>

      <div className="countdown">
        <p>{`${countdown.hours} hours ${countdown.minutes} minutes ${countdown.seconds} seconds`}</p>
      </div>

      {/* Add a button to navigate to the home page */}
      <button className="button-56 image-page" onClick={() => navigate('/')}>
        Go to Home Page
      </button>
    </div>
  );
};

export default ImagePage;