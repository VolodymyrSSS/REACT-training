import { useState, useRef } from 'react';

/* Хук useRef зазвичай використовується для безпосереднього доступу 
   до елемента DOM, такого як поле введення input, для виконання 
   обов'язкових дій типу фокусування чи анімація. Розглянемо фокусування.
*/

function App() {
	const [anyText, setEnyText] = useState('');
  
  // Спочатку ми створюємо посилання за допомогою хука useRef:
	const inputRef = useRef(null); // початкове значенням null ініціалізує хук
  // Загалом, початкове значення ref може бути null, число, рядок символів, іт.д.
  
  function focusToInput() {
    console.log(inputRef.current);
    /* Цей хук дає можливість посилатись прямо на HTML елемент. Бо кожен елемент 
    в DOM має атрибут ref, що дозволяє встановити посилання на потрібний елемент. */
    inputRef.current.focus(); // тут отримаєм прямий доступ до вузла DOM і викликаєм метод .focus

    // inputRef.current.value="Some value"; 
    /* тут ручне встановлення значення, але так робити
     не можна, бо стан в дійсності не змінився */
  }

  return (
    <div className="container">
      <h1>get HTML element with useRef hook</h1>

      <form autoComplete="on">
        {/* inputRef поєднується з елементом input через атрибут ref. */}
        <label htmlFor="anyText">Enter any text:</label>
        <br />
        <input 
          ref={inputRef}// далі ми приєднуємо посилання до елемента DOM за допомогою атрибута ref в JSX
          type="text" 
          id="anyText" 
          name="anyText" 
          placeholder="type here ..." 
          value={anyText}
          onChange={(e) => setEnyText(e.target.value)}
        />
        <br />
      </form>

      <div>The text was entered: {anyText} </div>

      {/* по кліку на кнопку, фокус переводиться на поле введення, а саме:
          коли кнопку натискають, здійснюється прямий доступ до вузла DOM 
          поля введення input  (inputRef.current), на якому викликається 
          метод focus. 
      */}
      <button className="btn-focus" onClick={focusToInput} >Focus to input</button>
    </div>
  );
}

export default App;
