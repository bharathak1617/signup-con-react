import React, { useState } from "react";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <Profile userId={currentUser.id} />
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
