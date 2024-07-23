// protectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
