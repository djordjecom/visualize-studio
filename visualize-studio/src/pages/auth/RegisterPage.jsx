import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../features/auth/slices/authSlice';

function RegisterPage() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();
            if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
            }

        // Privremena mock registracija
        dispatch(loginSuccess({ email, isAdmin: false}));
        navigate('/dashboard');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-primary focus:border-primary"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input 
                        type="passsword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-primary focus:border-primary"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded focus:ring-primary focus:border-primary"
                        required
                    />
                </div>
                <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;
