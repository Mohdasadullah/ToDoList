
import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/AuthContext"; // Importing AuthContext
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const { user, logout } = useContext(AuthContext); // Get user and logout function from AuthContext

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text, priority, dueDate, category) => {
    const newTodo = { id: Date.now(), text, priority, dueDate, category };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <h1 className="todo-app-heading">Todo App</h1>
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/todo" /> : <Login />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/todo"
              element={
                user ? (
                  <>
                    <div className="todo-content">
                      <AddTodo addTodo={addTodo} />
                      <TodoList todos={todos} removeTodo={deleteTodo} />
                    </div>
                    {/* Logout button at the bottom */}
                    <button className="logout-button" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
