import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const TreesContext = createContext();

const trees = [
  {id: "1", type: "Maple-Клен"},
  {id: "2", type: "Oak-Дуб"},
  {id: "3", type: "Willow-Верба"},
  {id: "4", type: "Alder-Вільха"},
  {id: "5", type: "Linden-Липа"},
  {id: "6", type: "Hornbeam-Граб"},
  {id: "7", type: "Pine-Сосна"},
  {id: "8", type: "Birch-Береза"},
  {id: "9", type: "Spruce-Ялина"},
  {id: "10", type: "Acacia-Акація"},
  {id: "11", type: "Aspen-Осика"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);

