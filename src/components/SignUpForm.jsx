import { useState } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
  
        const result = await response.json();

        console.log(result);
        setToken(result.token); 
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
        <div className="container">
          <h2 className="heading">Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              />
            </label>
            <label className="label">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </label>
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      );
    }