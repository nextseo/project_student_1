// import { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useContext(AuthContext);
//   if (!user) return <Navigate to="/login" />;
//   return allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// ProtectedRoute.js

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }




  if ( !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;