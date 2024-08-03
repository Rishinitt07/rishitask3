// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Authnticate';

const PrivateRoute = ({ element: element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ?element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;

