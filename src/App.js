// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ImagePage from './ImagePage';
import Quotes from './Quotes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-page" element={<ImagePage />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
};

export default App;
