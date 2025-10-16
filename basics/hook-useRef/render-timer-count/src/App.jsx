import { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

{/* Хук useRef дозволяє зберігати значення між рендерами.
    Його можна використовувати для зберігання змінного значення, яке не викликає 
    повторного рендерингу під час оновлення.  Якби ми спробували підрахувати, 
    скільки разів наш застосунок рендериться/відтворюється за допомогою хука 
    useState, ми б потрапили в нескінченний цикл, оскільки цей хук сам по собі 
    викликає повторний рендеринг. Щоб уникнути цього, ми можемо скористатися 
    хуком useRef. */}

function App() {
  const [inputValue, setInputValue] = useState("");
  
  // ініціалізуємо useRef встановленням початкового значення: useRef(0)
  const count = useRef(0); // це одинаково як: const count = {current: 0} 

  useEffect(() => {
    // useRef() повертає лише один елемент. Він повертає Object під назвою current
    // і доступ до нього можна отримати так: count.current
    count.current = count.current + 1;
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h3>Type in the input field:</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Render Count: {count.current}</h2>
      
    </>
  )
}

export default App
