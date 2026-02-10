function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "8px" }}>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default TodoItem;
