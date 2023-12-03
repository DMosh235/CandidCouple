// imageUrls.js
export const hardcodedImageUrls = [
    "https://i.imgur.com/8hqd6cA.jpg",
    "https://i.imgur.com/kQp9tPe.jpg",
    "https://i.imgur.com/EzGwfdb.jpg"
  ];
  
  export const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * hardcodedImageUrls.length);
    return hardcodedImageUrls[randomIndex];
  };
  