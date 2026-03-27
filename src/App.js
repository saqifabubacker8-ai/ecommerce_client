import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import SalePage from "./pages/SalePage";
 
// Simple auth guard — checks localStorage for auth token
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
 
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Scenario 2: already signed up → go straight to login */}
        <Route path="/login" element={<LoginPage />} />
 
        {/* Scenario 1: new user → signup first */}
        <Route path="/signup" element={<SignupPage />} />
 
        {/* Protected landing page */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />

        {/* Category Pages */}
        <Route
          path="/new-arrivals"
          element={
            <PrivateRoute>
              <NewArrivalsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/women"
          element={
            <PrivateRoute>
              <WomenPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/men"
          element={
            <PrivateRoute>
              <MenPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/accessories"
          element={
            <PrivateRoute>
              <AccessoriesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/sale"
          element={
            <PrivateRoute>
              <SalePage />
            </PrivateRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}