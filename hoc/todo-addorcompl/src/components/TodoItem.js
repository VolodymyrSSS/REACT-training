function TodoItem({ todo, onComplete }) {
  return (
    <li>
      {todo}{' '}
      <button onClick={onComplete}>Complete</button>
    </li>
  );
}

export default TodoItem;
