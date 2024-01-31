import TodoList from '../src/components/TodoList';

function App() {
  return (
    <div className="container">
      <h1>Logging HOC</h1>
      <h3>whenever a user adds or completes a task, we'll log the event in the browser console</h3>
      <TodoList />
    </div>
  );
}

export default App;
