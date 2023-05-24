import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LandingPage from "./views/LandingPage"
import SessionPage from "./views/SessionPage"
import Setup from "./views/Setup/Setup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Setup />} />
        <Route
          path="/session"
          element={<PrivateRoute><SessionPage /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

const PrivateRoute = ({ children }) => {
  // set with dispatch
  // const isAuthenticated = false;

  const isAuthenticated = true;


  return isAuthenticated ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/auth" replace />
  );
}

export default App;