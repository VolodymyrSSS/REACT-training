import React from 'react'
import TodoList from './todo/TodoList'

function App() {

  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'To speak with develop manager'},
    {id: 2, completed: true, title: 'To take a react course basic'},
    {id: 3, completed: false, title: 'To swim'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos = todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
    <div className='wrapper'>
      <h1>REACT-training:  'Todo List'</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>

    )
}

export default App;
