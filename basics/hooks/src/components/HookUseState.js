import React, {useState} from 'react';

function HookUseState() {

  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState( {
    title: 'Counter',
    date: Date.now()
  });

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // можна збільшувати викликаючи паралельно setCounter, що базується на попередньому стані
  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1
    });
    setCounter(prev => prev + 1);
  }

  // коли початковий стан потрібно вираховувати
  function computeInitialCounter() {
    console.log('Some calculation ....');
    return Math.trunc(Math.random() * 20);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  // коли потрібно взаємодіяти з об'єктами
  function updateTitle() {
    setState(prev => {
      return {...prev,
      title:'New Title!'
      }
    })
  }

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button className='btn btn-success' onClick={increment}>Increase</button>
      <button className='btn btn-danger' onClick={decrement}>Decrease</button>
      <button className='btn btn-warning' onClick={updateTitle}>Change name</button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default HookUseState;