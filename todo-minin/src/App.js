import React from 'react';
import Context from './context';

import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';

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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>React tutorial todo list</h1>

        <AddTodo onCreate={addTodo}/>

        {todos.length 
        ? (<TodoList todos={todos} onToggle={toggleTodo} />) 
        : (<h3>You have no todos!</h3>) }
      </div>
    </Context.Provider>
  );
}

export default App;
