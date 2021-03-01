import React, {useState, useEffect} from 'react';

export default function ItemsList({ getItems }) {
  // щоб передати в список параметри створюємо локальний стан
  const [items, setItems] = useState([]);

  // як тільки зміниться getItems ми будемо заповнювати масив items і за цим слідкує useEffect
  useEffect(() => {
    console.log('render');
    const newItems = getItems(42);
    setItems(newItems);
  }, [getItems])

  return (
    <ul>
      { items.map(i => <li key={i}>{i}</li>) }
    </ul>
  )
}