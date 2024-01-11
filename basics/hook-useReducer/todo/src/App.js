import React, { useState, useReducer } from 'react';
import Todo from './Todo';

export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo',
};

function reducer(todos, action) {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.todoName)];
		case ACTIONS.TOGGLE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		case ACTIONS.DELETE_TODO:
			return todos.filter((todo) => {
				return todo.id !== action.payload.id;
			});
		default:
			return todos;
	}
}

function newTodo(todoName) {
	return { id: Date.now(), todoName: todoName, complete: false };
}

function App() {
	const [todos, dispatch] = useReducer(reducer, []);
	const [todoName, setTodoName] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { todoName: todoName } });
		setTodoName('');
	}

	return (
		<>
			<h1>TODO with useReducer hook</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={todoName}
					onChange={(e) => setTodoName(e.target.value)}
				/>
			</form>
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
		</>
	);
}

export default App;
