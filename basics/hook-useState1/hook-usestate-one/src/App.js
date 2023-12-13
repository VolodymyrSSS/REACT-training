import { useState } from 'react';

function countInitial() {
	console.log('run initial value func');
	return 4;
}

function App() {
	// буде брати значення countInitial один раз тільки при початковому рендері
	// бо якщо просто useState(countInitial()) буде рендеритись кожен раз при update
	// const [count, setCount] = useState(() => countInitial());

	// при роботі з об'єктами:
	// const [state, setState] = useState({ count: 4, theme: 'green' });
	// const count = state.count;
	// const theme = state.theme;

	// function decrementCount() {
	// 	// setCount((prevCount) => prevCount - 1);
	// 	setState((prevState) => {
	// 		return { ...prevState, count: prevState.count - 1 };
	// 	});
	// }
	// function incrementCount() {
	// 	// setCount((prevCount) => prevCount + 1);
	// 	setState((prevState) => {
	// 		return { ...prevState, count: prevState.count + 1 };
	// 		// бо стрворюється новий стан
	// 	});
	// }

	// другий варіант - розподілити на декілька станів:
	const [count, setCount] = useState(() => countInitial());
	const [theme, setTheme] = useState('green');
	function decrementCount() {
		setCount((prevCount) => prevCount - 1);
		setTheme('blue');
	}
	function incrementCount() {
		setCount((prevCount) => prevCount + 1);
		setTheme('red');
	}

	return (
		<div className='presentation'>
			<button onClick={decrementCount}>-</button>
			<span> {count} </span>
			<span> {theme} </span>
			<button onClick={incrementCount}>+</button>
		</div>
	);
}

export default App;
