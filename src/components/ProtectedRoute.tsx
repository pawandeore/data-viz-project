// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom, authLoadingAtom } from '../atoms';

interface ProtectedRouteProps {
  redirectTo?: string; // Optional: where to redirect if not authenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo = "/login" }) => {
  const [user] = useAtom(userAtom);
  const [loading] = useAtom(authLoadingAtom);

  if (loading) {
    // You can return a loading spinner here if you want
    return <div>Loading authentication status...</div>;
  }

  if (!user) {
    // User not authenticated, redirect to login page
    return <Navigate to={redirectTo} replace />;
  }

  // User is authenticated, render the child route content
  return <Outlet />;
};

export default ProtectedRoute;