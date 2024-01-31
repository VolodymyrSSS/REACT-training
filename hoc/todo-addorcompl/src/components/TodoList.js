import { useState } from 'react';
import TodoItem from './TodoItem';
import withLogger from '../hoc/withLogger';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo('');
    }
  };

  const completeTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onComplete={() => completeTodo(index)} />
        ))}
      </ul>
    </div>
  );
};
// implement the TodoList component and use the withLogger HOC to add logging functionality to it
export default withLogger(TodoList);