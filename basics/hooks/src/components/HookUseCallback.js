import React, {useState, useCallback} from 'react';

import ItemsList from './ItemsList';

// useCallback = useMemo або потрібна щоб сама функція кешировалась/не змінювалась при новому рендері і не було сторонніх проблем

function HookUseCallback() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {color: colored ? 'tomato' : 'black'};

  // Згенерувати кількість елементів на основі count, які потрібно потім передати в інший компонент

  // земулюємо процес звернення до API
  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Eлемент ${i + indexNumber}`);
  }, [count]);

  return (
    <>
      <h3 style={styles}>Кількість елементів: {count}</h3>
      <button className='btn btn-success' onClick={() => setCount(prev => prev + 1)}>Додати елемент</button>
      <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Змінити колір заголовка</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default HookUseCallback;
