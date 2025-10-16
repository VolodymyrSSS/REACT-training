import { useState, useEffect, useRef } from 'react';

{/* useRef це хук що використовується для створення посилання на 
	змінні, що можуть змінюватись та зберігаються між рендерингами 
	компонентів не викликаючи при цьому перерендеринг. Або так - 
	зберігання змінних/значень, які мають зберігатися між рендерами 
	але не запускати повторний рендеринг у разі їх зміни. */}

function App() {
	const [anyText, setEnyText] = useState('');

	const renderCount = useRef(0); // тут значення буде зберігається протягом усіх рендерів
	/* Можна і так: 
	     const [renderCount, setRenderCount] = useState(0);
	проте setRenderCount викличе перерендер пізніше. Тому використано useRef, який
	подібний до useState, що зберігає попереднє значення стану і коли зміниться, 
	то не викличе перерендер компоненту. */

	useEffect(() => {
		
		// setRenderCount(prevRenderCount => prevRenderCount + 1); так буде викликано безкінечний цикл

		// а так - зміна значення ref не буде викликати перерендер
		renderCount.current = renderCount.current + 1;
	});

	return (
		<div className="container">
			<h1>render count with useRef hook</h1>

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

			<div>The text was entered: {anyText} </div>
			{/* <div>The text was rendered {renderCount} times</div> */}
			<div>The text was rendered: {renderCount.current} times</div>
		</div>
	);
}

export default App;
