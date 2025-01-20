import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProtectedRoute from './components/common/ProtectedRoute';
// import AdminRoute from './components/common/AdminRoute';

function App() {
  return (
    <Routes>
      {/* Temporary placeholder instead of Framer landing page */}
      <Route path="/" element={<Layout />}>
        <Route index element={
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold">Welcome to Visualize Studio</h1>
            <p className="mt-4">Landing Page Coming Soon</p>
          </div>
        } />
        
        {/* Rest of your routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;