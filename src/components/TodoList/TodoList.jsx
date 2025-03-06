import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      {["Work", "Personal", "Shopping", "Learning"].map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="tasks">
            {todos
              .filter((todo) => todo.category === category)
              .map((todo, index) => (
                <div key={index} className="todo-item">
                  <span className="todo-text">{todo.text}</span>
                  <span className={`priority ${todo.priority.toLowerCase()}`}>
                    {todo.priority}
                  </span>
                  <span className="due-date">{todo.dueDate}</span>
                  <button className="delete-btn" onClick={() => removeTodo(todo.id)}>✓</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;