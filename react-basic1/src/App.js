import React from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from './todo/AddTodo'


function App() {

  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'To speak with develop manager'},
    {id: 2, completed: false, title: 'To take a react course basic'},
    {id: 3, completed: false, title: 'To swim'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className='wrapper'>
        <h1>REACT-training:  'Todo List'</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>You have no current todos</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
