import { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ addTodo }) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState(today);
  const [category, setCategory] = useState("Work");

  const handleAdd = () => {
    if (!text.trim()) return;

    if (dueDate < today) {
      alert("Task date is in the past. Please select a valid date.");
      return;
    }

    addTodo(text, priority, dueDate, category);

    // Reset fields after adding task
    setText("");
    setPriority("Medium");
    setDueDate(today);
    setCategory("Work");
  };

  return (
    <div className="add-todo">
      {/* Task Input */}
      <input
        type="text"
        className="add-todo__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task..."
      />

      {/* Options below the Input */}
      <div className="options">
        <select
          className="add-todo__select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">🔥 High</option>
          <option value="Medium">⚡ Medium</option>
          <option value="Low">💤 Low</option>
        </select>

        <select
          className="add-todo__select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Learning">Learning</option>
        </select>

        <input
          type="date"
          className="add-todo__date"
          value={dueDate}
          min={today} // Prevents selecting past dates
          onChange={(e) => setDueDate(e.target.value)}
        />

        {/* Add Button */}
        <button className="add-todo__button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;