import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { FaStar } from 'react-icons/fa'

const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect}) {
  return <FaStar 
    color={selected ? 'red' : 'gray'}
    onClick={onSelect}
  />
}

function StarRating({ totalStars = 10 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div className='stars-container'>
      {createArray(totalStars).map((n, i) => (
        <Star 
          className='stars'
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p style={{fontSize:'28px'}}>{selectedStars} of {totalStars}</p>
    </div>
  );
}

function App() {
  return <StarRating totalStars={5}/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
