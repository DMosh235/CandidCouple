import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import Axios

const ImagePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getRandomImage');
        setImageUrl(response.data.imageUrl);
        setCountdown(getTimeUntilNextDay());
      } catch (error) {
        console.error(error);
      }
    };

    const countdownInterval = setInterval(() => {
      setCountdown(getTimeUntilNextDay());
    }, 1000);

    fetchRandomImage();

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/');
  };

  const getTimeUntilNextDay = () => {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    const timeUntilNextDay = nextDay.getTime() - now.getTime();
    const secondsUntilNextDay = Math.floor(timeUntilNextDay / 1000);

    return secondsUntilNextDay;
  };

  const formatCountdown = (countdown) => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className="image-container">
        {imageUrl && <img className="image" src={imageUrl} alt="Random Image" />}
      </div>
      <button className="button-56 image-page" onClick={handleButtonClick}>
        Back Home
      </button>
      <div className="countdown">
        {formatCountdown(countdown)}
      </div>
    </div>
  );
};

export default ImagePage;
