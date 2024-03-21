import { useState } from 'react';

function countInitial() {
	console.log('run initial value func');
	return 4;
}

function App() {
	// візьме значення countInitial один раз при початковому рендері
	const [countOne, setCountOne] = useState(() => countInitial());
	// бо якщо просто useState(countInitial()) буде рендеритись кожен раз при update

	function decrementCountOne() {
		setCountOne((prevCount) => prevCount - 1);
	}
	function incrementCountOne() {
		setCountOne((prevCount) => prevCount + 1);
	}

	// при роботі з об'єктами:
	const [componentState, setComponentState] = useState({ count: 4, theme: 'green' });
	const countTwo = componentState.count;
	const themeOne = componentState.theme;

	function decrementCountTwo() {
		// стрворюється новий стан
		setComponentState((prevComponentState) => {
			console.log('prevComponentState', prevComponentState);
			return { ...prevComponentState, count: prevComponentState.count - 1, theme: "blue" };
		});
	}
	function incrementCountTwo() {
		// стрворюється новий стан
		setComponentState((prevComponentState) => {
			return { ...prevComponentState, count: prevComponentState.count + 1 };
			
		});
	}

	// третій варіант - розподілити на декілька станів:
	const [countThree, setCountThree] = useState(() => countInitial());
	const [theme, setTheme] = useState('green');

	function decrementCountThree() {
		setCountThree((prevCount) => prevCount - 1);
		setTheme('blue');
	}
	function incrementCountThree() {
		setCountThree((prevCount) => prevCount + 1);
		setTheme('red');
	}

	return (
		<div>
			<h2 className='title'>The task:</h2>
			<h3>1 - create a counter with two buttons: one button for decrement and another one for increment. As well, create an initial state function "countInitial" which returns default value of the counter - 4 and in console the phrase "run initial value func";</h3>
			<h3>2 - on click on decrement the counter decreasing its count, on increment - increasing;</h3>
			<h3>3 - we can see count chang on the screen.</h3>

			<div className='presentation'>
				<button onClick={decrementCountOne}>-</button>
				<span> {countOne} </span>
				<button onClick={incrementCountOne}>+</button>
			</div>
			<br />

			<h3>4 - than, pass initial state as object with property count: 4 </h3>
			<h3>5 - on click on decrement the counter decreasing its count, on increment - increasing;</h3>
			<h3>6 - we can see count chang on the screen.</h3>

			<div className='presentation'>
				<button onClick={decrementCountTwo}>-</button>
				<span> {countTwo} </span>
				<span> {themeOne} </span>
				<button onClick={incrementCountTwo}>+</button>
			</div>

			<h3>7 - this time pass initial state as function "countInitial" but create two component states:
				countThree and theme</h3>
			<h3>8 - on click on decrement the counter decreasing its count as well as state theme change its string value 	to "blue", on increment - increasing count and change its string value to "red";</h3>
			<h3>9 - we can see both changes count and string value on the screen.</h3>


			<div className='presentation'>
				<button onClick={decrementCountThree}>-</button>
				<span> {countThree} </span>
				<span> {theme} </span>
				<button onClick={incrementCountThree}>+</button>
			</div>
		</div>
	);
}

export default App;
