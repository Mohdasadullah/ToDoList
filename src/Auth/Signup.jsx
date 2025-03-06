import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import AuthContext
import "./Auth.css"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    const success = signup(email, password); 

    if (success) {
      navigate("/"); 
    } else {
      setError("User already exists! Please log in.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default Signup;