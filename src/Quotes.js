// QuotesPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuotesPage = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Function to get a random quote
    const getRandomQuote = () => {
      const quotesData = [
        {"quote": "The best thing to hold onto in life is each other.", "author": "Audrey Hepburn"},
        {"quote": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", "author": "Lao Tzu"},
        {"quote": "Love is composed of a single soul inhabiting two bodies.", "author": "Aristotle"},
        {"quote": "The greatest happiness you can have is knowing that you do not necessarily require happiness.", "author": "William Saroyan"},
        {"quote": "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", "author": "Unknown"},
        {"quote": "To love and be loved is to feel the sun from both sides.", "author": "David Viscott"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.", "author": "Helen Keller"},
        {"quote": "The way to love anything is to realize that it may be lost.", "author": "Gilbert K. Chesterton"},
        {"quote": "Love does not dominate; it cultivates.", "author": "Johann Wolfgang von Goethe"},
        {"quote": "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.", "author": "Paulo Coelho"},
        {"quote": "We are most alive when we're in love.", "author": "John Updike"},
        {"quote": "Love is not just looking at each other, it's looking in the same direction.", "author": "Antoine de Saint-Exupéry"},
        {"quote": "Love all, trust a few, do wrong to none.", "author": "William Shakespeare"},
        {"quote": "The heart wants what it wants. There's no logic to these things. You meet someone and you fall in love and that's that.", "author": "Woody Allen"},
        {"quote": "Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses.", "author": "Lao Tzu"},
        {"quote": "True love stories never have endings.", "author": "Richard Bach"},
        {"quote": "Love is when the other person's happiness is more important than your own.", "author": "H. Jackson Brown Jr."},
        {"quote": "There is only one happiness in life: to love and be loved.", "author": "George Sand"},
        {"quote": "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.", "author": "Nicholas Sparks"},
        {"quote": "The only thing we never get enough of is love; and the only thing we never give enough of is love.", "author": "Henry Miller"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "Love one another. As I have loved you, so you must love one another.", "author": "Jesus Christ"},
        {"quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "author": "Dr. Seuss"},
        {"quote": "Love is a friendship set to music.", "author": "Joseph Campbell"},
        {"quote": "The best way to mend a broken heart is time and girlfriends.", "author": "Gwyneth Paltrow"},
        {"quote": "Love in its essence is spiritual fire.", "author": "Lucius Annaeus Seneca"},
        {"quote": "A loving heart is the truest wisdom.", "author": "Charles Dickens"},
        {"quote": "Love is an act of endless forgiveness. A tender look which becomes a habit.", "author": "Peter Ustinov"},
        {"quote": "In dreams and in love, there are no impossibilities.", "author": "Janos Arnay"},
        {"quote": "Love is the greatest refreshment in life.", "author": "Pablo Picasso"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "The art of love is largely the art of persistence.", "author": "Albert Ellis"},
        {"quote": "A successful marriage requires falling in love many times, always with the same person.", "author": "Mignon McLaughlin"},
        {"quote": "Love sought is good, but given unsought, is better.", "author": "William Shakespeare"},
        {"quote": "Love is a better teacher than duty.", "author": "Albert Einstein"},
        {"quote": "Love cures people—both the ones who give it and the ones who receive it.", "author": "Karl A. Menninger"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "To love oneself is the beginning of a lifelong romance.", "author": "Oscar Wilde"},
        {"quote": "The greatest healing therapy is friendship and love.", "author": "Hubert H. Humphrey"},
        {"quote": "The best way to find yourself is to lose yourself in the service of others.", "author": "Mahatma Gandhi"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "Love is like the wind, you can't see it but you can feel it.", "author": "Nicholas Sparks"},
        {"quote": "The best proof of love is trust.", "author": "Joyce Brothers"},
        {"quote": "The giving of love is an education in itself.", "author": "Eleanor Roosevelt"},
        {"quote": "To love oneself is the beginning of a lifelong romance.", "author": "Oscar Wilde"},
        {"quote": "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.", "author": "Sam Keen"},
        {"quote": "Love is the bridge between you and everything.", "author": "Rumi"},
        {"quote": "Love is the master key that opens the gates of happiness.", "author": "Oliver Wendell Holmes, Sr."},
        {"quote": "Being in love with you makes every day an interesting one.", "author": "Unknown"},
        {"quote": "Love is not about possession. It's about appreciation.", "author": "Unknown"},
        {"quote": "Love is when the other person's happiness is more important than your own.", "author": "H. Jackson Brown Jr."},
        {"quote": "In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.", "author": "Mignon McLaughlin"},
        {"quote": "Love is what makes the ride worthwhile.", "author": "Franklin P. Jones"},
        {"quote": "There is no remedy for love but to love more.", "author": "Henry David Thoreau"},
        {"quote": "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.", "author": "Nicholas Sparks"},
        {"quote": "Love is like the wind, you can't see it but you can feel it.", "author": "Nicholas Sparks"},
        {"quote": "The best proof of love is trust.", "author": "Joyce Brothers"},
        {"quote": "The giving of love is an education in itself.", "author": "Eleanor Roosevelt"},
        {"quote": "To love oneself is the beginning of a lifelong romance.", "author": "Oscar Wilde"},
        {"quote": "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.", "author": "Sam Keen"},
        {"quote": "Love is the bridge between you and everything.", "author": "Rumi"},
        {"quote": "Love is the master key that opens the gates of happiness.", "author": "Oliver Wendell Holmes, Sr."},
        {"quote": "Being in love with you makes every day an interesting one.", "author": "Unknown"},
        {"quote": "Love is not about possession. It's about appreciation.", "author": "Unknown"},
        {"quote": "Love is when the other person's happiness is more important than your own.", "author": "H. Jackson Brown Jr."},
        {"quote": "In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.", "author": "Mignon McLaughlin"},
        {"quote": "Love is what makes the ride worthwhile.", "author": "Franklin P. Jones"},
        {"quote": "There is no remedy for love but to love more.", "author": "Henry David Thoreau"},
        {"quote": "Love is the greatest refreshment in life.", "author": "Pablo Picasso"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "The art of love is largely the art of persistence.", "author": "Albert Ellis"},
        {"quote": "A successful marriage requires falling in love many times, always with the same person.", "author": "Mignon McLaughlin"},
        {"quote": "Love sought is good, but given unsought, is better.", "author": "William Shakespeare"},
        {"quote": "Love is a better teacher than duty.", "author": "Albert Einstein"},
        {"quote": "Love cures people—both the ones who give it and the ones who receive it.", "author": "Karl A. Menninger"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "To love oneself is the beginning of a lifelong romance.", "author": "Oscar Wilde"},
        {"quote": "The greatest healing therapy is friendship and love.", "author": "Hubert H. Humphrey"},
        {"quote": "The best way to find yourself is to lose yourself in the service of others.", "author": "Mahatma Gandhi"},
        {"quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore"},
        {"quote": "Love is like the wind, you can't see it but you can feel it.", "author": "Nicholas Sparks"},
        {"quote": "The best proof of love is trust.", "author": "Joyce Brothers"},
        {"quote": "The giving of love is an education in itself.", "author": "Eleanor Roosevelt"},
        {"quote": "To love oneself is the beginning of a lifelong romance.", "author": "Oscar Wilde"},
        {"quote": "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.", "author": "Sam Keen"},
        {"quote": "Love is the bridge between you and everything.", "author": "Rumi"},
        {"quote": "Love is the master key that opens the gates of happiness.", "author": "Oliver Wendell Holmes, Sr."},
        {"quote": "Being in love with you makes every day an interesting one.", "author": "Unknown"},
        {"quote": "Love is not about possession. It's about appreciation.", "author": "Unknown"}
      ];

      const randomIndex = Math.floor(Math.random() * quotesData.length);
      const randomQuote = quotesData[randomIndex];

      setQuote(randomQuote?.quote || '');
      setAuthor(`- ${randomQuote?.author || ''}`);
    };

    getRandomQuote();
  }, []);

  return (
    <div>
      <div className="quote-container">
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
      </div>

      <button className="button-56 image-page" onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
};

export default QuotesPage;
