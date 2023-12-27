// App.tsx
import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
 const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    // Simulating a successful login
    setIsLoggedIn(true);
  };

  const handleToggleSignUp = () => {
    setShowLogin(false);
  };

  const handleToggleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {isLoggedIn && <Navbar />}
      {isLoggedIn ? (
        <div className="flex">
          <Sidebar />
          <KanbanBoard />
        </div>
      ) : (
        <>
          {showLogin ? (
            <Login onLogin={handleLogin} onToggleSignUp={handleToggleSignUp} />
          ) : (
            <SignUp onToggleLogin={handleToggleLogin} />
          )}
        </>
      )}
    </div>
  );
};

export default App;