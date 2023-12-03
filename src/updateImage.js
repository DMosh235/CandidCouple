// updateImage.js

export default async function (req, res) {
  try {
    // Your logic to update the image goes here
    const newImageUrl = generateNewImageUrl(); // Replace with your logic

    res.status(200).json({ imageUrl: newImageUrl });
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).send('Internal Server Error');
  }
}

// Example function to generate a new random image URL
function generateNewImageUrl() {
  const hardcodedImageUrls = [
    "https://i.imgur.com/8hqd6cA.jpg",
    "https://i.imgur.com/kQp9tPe.jpg",
    "https://i.imgur.com/EzGwfdb.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * hardcodedImageUrls.length);
  return hardcodedImageUrls[randomIndex];
}
