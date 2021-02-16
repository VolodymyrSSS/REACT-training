import React from 'react';

import TodoList from './Todo/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed:false, title:'To buy a bread and butter'},
    {id:2, completed:true, title:'To buy the fruits and vegetables'},
    {id:3, completed:false, title:'To buy a BMW X4'},
    {id:4, completed:false, title:'To buy a yacht "Beneteau Oceanis40Poole Length12.15"'}
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }

  return (
    <div className='wrapper'>
      <h1>React tutorial todo list</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
