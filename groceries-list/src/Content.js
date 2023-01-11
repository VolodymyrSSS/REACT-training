import React, { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Volodymyr');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Roman', 'Volodymyr', 'Taras'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <h4 onDoubleClick={handleClick}>Hello {name} !</h4>
      <button onClick={handleNameChange}>Change name</button>
      <br />
      <button onClick={handleClick}>Click it</button>
      <br />
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};

export default Content;
