import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LandingPage from "./views/LandingPage"
import Authentication from "./views/Authentication"
import SessionPage from "./views/SessionPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route
          path="/session"
          element={<PrivateRoute><SessionPage /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

// PrivateRoute component to handle authentication
const PrivateRoute = ({ children }) => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/auth" replace />
  );
}

export default App;