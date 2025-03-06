import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import AuthContext
import "./Auth.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext); // Use login function from context
  const navigate = useNavigate();

  const handleLogin = () => {
    const isAuthenticated = login(email, password); // Call login function

    if (isAuthenticated) {
      navigate("/todo"); // Redirect to the todo page after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="auth-error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Dont have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css"; // Ensure you have a CSS file for styling

// const Login = ({ setIsAuthenticated }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     try {
//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       if (!storedUser) {
//         setError("No user found. Please sign up first.");
//         return;
//       }

//       if (storedUser.email === email && storedUser.password === password) {
//         setIsAuthenticated(true);
//         localStorage.setItem("isAuthenticated", "true");
//         navigate("/todo");
//       } else {
//         setError("Invalid email or password.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       {error && <p className="auth-error">{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       <p>
//         Don't have an account? <a href="/signup">Sign up</a>
//       </p>
//     </div>
//   );
// };

// export default Login;