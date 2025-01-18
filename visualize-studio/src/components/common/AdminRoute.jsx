import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminRoute() {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    
    return isAuthenticated && user?.isAdmin ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default AdminRoute;
