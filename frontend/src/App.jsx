import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <LoginPage onLogin={() => setIsAuthenticated(true)} />
        } />
        <Route path="/dashboard" element={
          isAuthenticated ? 
            <DashboardPage /> : 
            <Navigate to="/" />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;