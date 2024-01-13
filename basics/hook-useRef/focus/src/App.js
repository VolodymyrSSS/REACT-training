import { useState, useRef } from 'react';

function App() {
	const [anyText, setEnyText] = useState('');
  
	const inputRef = useRef();
  
  function focusToInput() {
    console.log(inputRef.current);
    /* Цей хук дає можливість посилатись на елемент в HTML розмітці. Бо кожен елемент в DOM має атрибут ref, що 
    дозволяє встановити посилання на потрібний елемент. */
    inputRef.current.focus();

    // inputRef.current.value="Some value"; 
    /* тут ручне встановлення значення, але так робити
     не можна, бо стан в дійсності не змінився */
  }

  return (
    <div className="container">
      <h1>get HTML element with useRef hook</h1>

      <form autoComplete="on">
        <label htmlFor="anyText">Enter any text:</label>
        <br />
        <input 
          ref={inputRef}
          type="text" 
          id="anyText" 
          name="anyText" 
          placeholder="type here ..." 
          value={anyText}
          onChange={(e) => setEnyText(e.target.value)}
        />
        <br />
      </form>

      <div>The text was entered {anyText} </div>

      {/* по кліку на кнопку, фокус переводиться на поле введення */}
      <button className="btn-focus" onClick={focusToInput} >Focus to input</button>
    </div>
  );
}

export default App;
