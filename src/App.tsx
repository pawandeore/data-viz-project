// src/App.tsx
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAtom } from 'jotai';
import { userAtom } from './atoms';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // AuthManager will update userAtom, triggering re-render
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        {!user && <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>}
        {!user && <Link to="/signup" style={{ marginRight: '1rem' }}>Sign Up</Link>}
        {user && <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add other protected routes here */}
        </Route>

        {/* Optional: Redirect if user is logged in and tries to access login/signup again */}
        {/* Or handle this within LoginPage/SignupPage itself by redirecting if userAtom is not null */}
      </Routes>
    </>
  );
}

export default App;