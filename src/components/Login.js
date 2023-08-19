import React, { useState } from "react";
import './login.css'
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [datass, setdatass] = useState([]);
  
  const handleLogin = () => {
    setError("");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log( data);
        setdatass(data);
        if (data.token !== undefined) {
          console.log(data.username);
          onLogin(data.user);
          console.log(datass);
        } else {
          setError(data.error);
          console.log("The user details is wrong");
          alert("check your login details again")
        }
      })
  };

  return (
    <div className="loginpage">
      <div>
      <p>Welcome back</p>
      <h2>Sign in to your account</h2>
      </div>
      <div>
      <label htmlFor="username">Your name</label><br></br>
      <input
        type="text" id="username" value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="password">Password:</label><br></br>
      <input
        type="password" id="password" value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleLogin}>Continue</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Forgot your Password?</p>
      <div>
        <p className="newacc">Don't have an account?</p> <a href="/Login">Sign up</a>
      </div>
    </div>
  );
};

export default Login;