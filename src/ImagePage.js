// ImagePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * hardcodedImageUrls.length);
  return hardcodedImageUrls[randomIndex];
};

const ImagePage = () => {
  const imageUrl = getRandomImageUrl();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the ImagePage when the button is clicked
    navigate('/');
  };

  return (
    <div className="image-container">
      <img className="image" src={imageUrl} alt="Random Image" />
      <button className="button-56 image-page" onClick={handleButtonClick}>
        Back Home
      </button>
    </div>
  );
};

const hardcodedImageUrls = [
  "https://i.imgur.com/pu76vwV.jpg",
  "https://i.imgur.com/kQp9tPe.jpg",
  "https://i.imgur.com/EzGwfdb.jpg",
  "https://i.imgur.com/Y8g4jv7.jpg",
  "https://i.imgur.com/8hqd6cA.jpg",
  "https://i.imgur.com/DF2S3FS.jpg",
  "https://i.imgur.com/urV5Je3.jpg",
  "https://i.imgur.com/LrMUY9o.jpg",
  "https://i.imgur.com/wC1NMTo.jpg",
  "https://i.imgur.com/m53r6oI.jpg",
  "https://i.imgur.com/OT0d72f.jpg",
  "https://i.imgur.com/aiMc7bc.jpg",
  "https://i.imgur.com/Djx6gYv.jpg",
  "https://i.imgur.com/og8gcHk.jpg",
  "https://i.imgur.com/uhENx18.jpg",
  "https://i.imgur.com/aOIItA5.jpg",
  "https://i.imgur.com/9Vk4iS9.jpg",
];

export default ImagePage;
