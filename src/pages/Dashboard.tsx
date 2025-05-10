// src/pages/DashboardPage.tsx
import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms';

const DashboardPage: React.FC = () => {
  const [user] = useAtom(userAtom);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "?";
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase().slice(0, 2);
  }

  if (!user) {
    return <p>Loading user data or not logged in...</p>; // Should be handled by ProtectedRoute mostly
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Dashboard</h2>
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
      <p>UID: {user.uid}</p>
      {/* You can display other user information available in the user object */}
    </div>
  );
};

export default DashboardPage;