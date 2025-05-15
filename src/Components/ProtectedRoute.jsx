import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user === undefined || user === null) {
    return null;
  }

  if (user.email !== 'info@richmondrenaissance.org') {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
