// ImagePage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AWS from 'aws-sdk'; // Import AWS SDK

// Configure AWS with your credentials
AWS.config.update({
  accessKeyId: 'AKIAQBOEY2DED2HPQF4H',
  secretAccessKey: '5qhBssna75NGzVty8gI2lgLBaUaRdel5snu0XJOu',
  region: 'us-east-2',
});


const s3 = new AWS.S3();
const bucketName = 'usinphotos';

const getRandomImage = async () => {
  try {
    const listObjectsResponse = await s3.listObjectsV2({ Bucket: bucketName }).promise();
    const randomObject = listObjectsResponse.Contents[Math.floor(Math.random() * listObjectsResponse.Contents.length)];
    const imageUrl = s3.getSignedUrl('getObject', { Bucket: bucketName, Key: randomObject.Key });

    return imageUrl;
  } catch (error) {
    console.error('Error listing objects:', error);
    return null;
  }
};

const ImagePage = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      const imageUrl = await getRandomImage();
      setImageSrc(imageUrl);
    };

    fetchRandomImage();
  }, []);

  return (
    <div className="image-container">
      <img
        className="image"
        src="https://bloximages.newyork1.vip.townnews.com/miltonindependent.com/content/tncms/assets/v3/editorial/c/f8/cf87e12c-cf88-11eb-b67d-631a1042b820/60cb77c6e6772.image.jpg?crop=1568%2C823%2C0%2C249&resize=1200%2C630&order=crop%2Cresize"  // Replace with the URL of your image
        alt="Pic of Us"
      />
    </div>
  );
};

export default ImagePage;
