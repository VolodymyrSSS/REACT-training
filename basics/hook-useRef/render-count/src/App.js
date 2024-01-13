import { useState, useEffect, useRef } from 'react';

function App() {
	const [anyText, setEnyText] = useState('');
	// const [renderCount, setRenderCount] = useState(0);
	const renderCount = useRef(0);
	/* цей хук дуже подібний до useState - зберігає попереднє 
	значення стану проте не викликає перерендер компоненту*/

	useEffect(() => {
		// this cause endless loop
		// setRenderCount(prevRenderCount => prevRenderCount + 1);

		// this is NOT cause component rerender
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

			<div>The text was entered {anyText} </div>
			{/* <div>The text was rendered {renderCount} times</div> */}
			<div>The text was rendered {renderCount.current} times</div>
		</div>
	);
}

export default App;
