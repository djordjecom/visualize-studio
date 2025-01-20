import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectDetails from './pages/projects/ProjectDetails';
// import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';
// import AdminRoute from './components/common/AdminRoute';

function App() {
  return (
    <Routes>
      {/* Public rute */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Protected user rute */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
        </Route>

        {/* Protected admin rute */}
        {/*<Route element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
