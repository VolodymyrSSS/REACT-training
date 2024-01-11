import { useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	function decrementCount() {
		dispatch({ type: 'decrement' });
	}
	function incrementCount() {
		dispatch({ type: 'increment' });
	}

	return (
		<div className='presentation'>
			<button onClick={decrementCount}>-</button>
			<span> {state.count} </span>
			<button onClick={incrementCount}>+</button>
		</div>
	);
}

export default App;
