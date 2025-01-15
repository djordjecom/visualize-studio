import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../../features/auth/slices/authSlice';

function Header() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth); 

    const handleLogout = () => {
        dispatch(logout());
    };

    return(
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-x1 font-bold text-primary">
                Visualize Studio
                </Link>

                {/* Nav Linkovi */}
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                        <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
                        <Link to="/projects" className="hover:text-primary">Projects</Link>
                        {user?.isAdmin && (
                            <Link to="/admin" className="hover:text-primary">Admin</Link>
                        )}
                        <button
                        onClick={handleLogout}
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
                        >
                            Logout
                        </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-primary">Login</Link>
                            <Link to="/register" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">Register</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;

