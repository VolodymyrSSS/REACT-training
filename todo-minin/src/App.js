import React from 'react';

import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    {id:1, completed:false, title:'To buy a bread and butter'},
    {id:2, completed:false, title:'To buy the fruits and vegetables'},
    {id:3, completed:false, title:'To buy a BMW X4'},
    {id:4, completed:false, title:'To buy a yacht "Beneteau Oceanis40Poole Length12.15"'}
  ]
  return (
    <div className='wrapper'>
      <h1>React tutorial todo list</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
