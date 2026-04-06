import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/loginForm";
import Register from "./components/auth/registerForm";
import NavBar from "./components/navBar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/play" element={<h2>Page not found</h2>} />
        <Route path="/settings" element={<h2>Page not found</h2>} />
        <Route path="/logout" element={<h2>Page not found</h2>} />

        {/* Add a 404 fallback */}
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
