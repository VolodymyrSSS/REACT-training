import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from './Api'; // a little test to pull in data from an API(Wikipedia API with URL endpoint as ["Seona Dancing",["Seona Dancing"],[""],["https://en.wikipedia.org/wiki/Seona_Dancing"]])
import './index.css';

// render the App to the root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
