import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <LoginPage onLogin={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/register" 
          element={
            isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <RegisterPage onRegister={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
              <DashboardPage /> : 
              <Navigate to="/login" />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;