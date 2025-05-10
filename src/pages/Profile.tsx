// src/pages/Profile.tsx
import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const Profile: React.FC = () => {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "?";
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase().slice(0, 2);
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!user) {
    return <p>Loading user data or not logged in...</p>; // Should be handled by ProtectedRoute mostly
  }

  return (
    <div className='p-10 text-center'>
      <h2>Profile</h2>
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt={user.displayName || user.email || "User Profile"}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '20px auto',
            display: 'block',
            border: '2px solid #ddd'
          }}
        />
      ) : (
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px auto',
          fontSize: '36px',
          fontWeight: 'bold',
          border: '2px solid #ddd'
        }}>
          {getInitials(user.displayName || user.email)}
        </div>
      )}
      <h3>Welcome, {user.displayName || user.email}!</h3>
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        className='bg-red-500 *:hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5'
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;