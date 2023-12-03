// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

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
    "https://i.imgur.com/EzGwfdb.jpg"
];

let currentImageUrl = getRandomImageUrl();

function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * hardcodedImageUrls.length);
  return hardcodedImageUrls[randomIndex];
}

function updateImageUrlOncePerDay() {
  const now = new Date();
  const currentHour = now.getUTCHours();

  // Check if it's 12 am (midnight) in UTC
  if (currentHour === 0) {
    currentImageUrl = getRandomImageUrl();
    console.log('Image updated at 12 am.');
  }
}

// Update the image once per day
setInterval(updateImageUrlOncePerDay, 24 * 60 * 60 * 1000);

app.use(cors());

app.get('/getRandomImage', (req, res) => {
  res.json({ imageUrl: currentImageUrl });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
