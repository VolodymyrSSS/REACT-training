import React, {useState, useEffect, useRef} from 'react';

function HookUseRef() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial');

  // стани зберігаються між рендерами компонента
  const renderCount = useRef(1);

  // для отримання ссилок на DOM-елементи
  const inputRef = useRef(null);

  // для отримання програмного фокуса
  const focus = () => inputRef.current.focus();

  // для отримання значення попереднього стану
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++; // тут ми не викликаємо рендер компонента
    console.log(inputRef.current.value);
  }) // useEffect без другого параметра викликається кожен раз коли проходить render


  useEffect(() => {
    prevValue.current = value; // стани зберігаються але рендер не викликається
  }, [value])

  return (
    <div>
      <h3>Кількість рендерів: {renderCount.current}</h3>
      <h3>Попередній стан: {prevValue.current}</h3>
      <input type='text' onChange={e => setValue(e.target.value)} value={value} ref={inputRef} />
      <button className='btn btn-dark' onClick={focus} >Focus</button>
    </div>
  );
}

export default HookUseRef;
