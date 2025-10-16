import { useState, useEffect, useRef } from 'react';

/* Хук useRef дозволяє зберігати значення між рендерами.
   Його можна використовувати для зберігання змінного значення, яке 
   не викликає повторного рендерингу під час оновлення. Але також 
   така властивість важлива і тим, що можна змінювати чи отримувати 
   значення між рендерами, бо по іншому можна отримати таке значення
   тільки змінивши стан чи властивості, але вони викликають перередндер.
*/

function App() {
  const [anyText, setEnyText] = useState('');
  const prevText = useRef('');
  
  useEffect(() => {
    /* Таким чином ми можемо отримати попереднє значення 
      не викликаючи додаткового перерендера компонента. */
    prevText.current = anyText;
  }, [anyText]);


  return (
    <div className="container">
			<h1>get previous value with useRef</h1>

			<form autocomplete="on">
				<label htmlFor="anyText">Enter any text:</label>
				<br />
				<input
					type="text" 
					id="anyText" 
					name="anyText" 
					placeholder="type here ..." 
					value={anyText}
					onChange={(e) => setEnyText(e.target.value)}
				/>
				<br />
			</form>

			<div>The text is getting like:<hr />
       {anyText}<hr />
      but before it use to be <hr />
      {prevText.current} <br />
      </div>
		</div>
  );
}

export default App;
