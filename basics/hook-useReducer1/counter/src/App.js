import { useReducer } from 'react';

const ACTIONS = {
	DECREMENT: 'decrement',
	INCREMENT: 'increment',
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	function decrementCount() {
		dispatch({ type: ACTIONS.DECREMENT });
	}
	function incrementCount() {
		dispatch({ type: ACTIONS.INCREMENT });
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
