const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div>
      <label for="todo">Add Todo:</label>{' '}
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
