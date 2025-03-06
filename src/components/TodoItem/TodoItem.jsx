import "./TodoItem.css";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "todo-item--completed" : ""}`}>
      <span className="todo-item-text" onClick={() => toggleTodo(todo.id)}>
        {todo.text} - <span className="todo-item-priority">{todo.priority}</span>
      </span>
      <span className="todo-item-date">{todo.dueDate}</span>
      <button className="todo-item-delete" onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  );
};

export default TodoItem;