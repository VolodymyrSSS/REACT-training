import React, {useState, useEffect} from 'react';

function HookUseEffect() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  });

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  // базове використання - для виконання sideeffects
  // useEffect(() => {
  //   console.log('render');
  // });

  // цей useEffect залежить від type - тобто, якщо тільки state type змінився, то викликати колбек
  // useEffect(() => {
  //   console.log('Type changed', type);
  // }, [type]);

  // разом з асинхронним запитом
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => { // для очищення
      console.log('clean type');
    }
  }, [type]);

  // емуляція життєвого циклу коли компонент 'зрендерився' і готовий до роботи
  // useEffect(() => {
  //   console.log('ComponentDidMount');
  // }, []);

  // отримання координат миші
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => { // для видалення EventListener
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);


  return (
    <div>
      <h3>Resources: {type} </h3>
      <button className='btn btn-primary' onClick={() => setType('users')} >Users</button>
      <button className='btn btn-info' onClick={() => setType('todos')} >Todos</button>
      <button className='btn btn-secondary' onClick={() => setType('posts')} >Posts</button>

      <pre>
        {/* {JSON.stringify(data, null, 2)} */}
        {JSON.stringify(pos, null, 2)}
      </pre>
    </div>
  );
}

export default HookUseEffect;
