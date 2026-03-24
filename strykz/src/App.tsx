import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/loginForm";
import Register from "./components/auth/registerForm";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add a 404 fallback */}
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}

export default App;
