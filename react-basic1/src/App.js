import React from 'react'
import TodoList from './todo/TodoList'

function App() {

  const todos = [
    {id: 1, completed: false, title: 'To speak with develop manager'},
    {id: 2, completed: false, title: 'To take a react course basic'},
    {id: 3, completed: false, title: 'To swim'}
  ]

  return (
    <div className='wrapper'>
      <h1>REACT Tutorial</h1>
      <TodoList todos={todos}/>
    </div>

    )
}

export default App;
