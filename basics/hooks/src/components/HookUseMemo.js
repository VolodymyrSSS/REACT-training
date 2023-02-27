import React, {useState, useEffect, useMemo} from 'react';

function complexCompute(num) {
  let i = 0;
  while(i < 1000000000) i++;
  return num * 2;
}

function HookUseMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // збереже об'єкт на слідуючий рендер
  const styles = useMemo(() => {
    return {
      color: colored ? 'darkred' : 'black'
    }
  }, [colored]);

  // якщо число не змінилось, то нам його не потрібно знову вираховувати
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  // коли працюємо з об'єктами то useEffect не викликається бо ми його закеширували в useMemo
  useEffect(() => {
    console.log('стиль змінився');
  }, [styles]);

  return (
    <>
      <h3 style={styles}>Властивість, що вираховується: {computed}</h3>
      <button className='btn btn-success' onClick={() => setNumber(prev => prev + 1)}>Додати</button>
      <button className='btn btn-danger' onClick={() => setNumber(prev => prev - 1)}>Відняти</button>
      <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Змінити колір заголовка</button>
    </>
  );
}

export default HookUseMemo;
