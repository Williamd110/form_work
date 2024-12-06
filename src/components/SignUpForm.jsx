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
        <div style={styles.container}>
          <h2 style={styles.heading}>Sign Up</h2>
          {error && <p style={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </label>
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      );
    }
    
    const styles = {
      container: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f1f9ff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 255, 0.1)",
      },
      heading: {
        textAlign: "center",
        color: "#0066cc",
        marginBottom: "20px",
      },
      error: {
        color: "red",
        textAlign: "center",
      },
      form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      },
      label: {
        fontSize: "14px",
        color: "#333",
      },
      input: {
        padding: "10px",
        border: "1px solid #007bff",
        borderRadius: "4px",
        fontSize: "14px",
        outline: "none",
        transition: "border 0.3s ease",
      },
      inputFocus: {
        borderColor: "#0056b3",
      },
      button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease",
      },
    };
    