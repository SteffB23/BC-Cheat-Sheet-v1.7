import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ABA from './pages/ABA';
import TPFBA from './pages/TPFBA';
import Resources from './pages/Resources';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function App() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const showNavigation = isAuthenticated && location.pathname !== '/login';

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aba"
            element={
              <ProtectedRoute>
                <ABA />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tpfba"
            element={
              <ProtectedRoute>
                <TPFBA />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
        </Routes>
        {showNavigation && <Navigation />}
      </div>
    </ErrorBoundary>
  );
}

export default App;