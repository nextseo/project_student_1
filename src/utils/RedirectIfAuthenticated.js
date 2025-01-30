// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';

// const RedirectIfAuthenticated = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   // ถ้าผู้ใช้ล็อกอินแล้ว ให้นำไปยังหน้าตาม role ของผู้ใช้
//   if (user) {
//     if (user.role === 'admin') return <Navigate to="/admin" />;
//     if (user.role === 'employee') return <Navigate to="/employee" />;
//     if (user.role === 'user') return <Navigate to="/user" />;
//   }
  
//   // ถ้าผู้ใช้ยังไม่ล็อกอิน ให้แสดงเนื้อหาปกติ
//   return children;
// };

// export default RedirectIfAuthenticated;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const RedirectIfAuthenticated = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    // Redirect based on user role
    switch (user.role) {
      case "employee":
        return <Navigate to="/employee" />;
      case "customer":
        return <Navigate to="/customer" />;
      case "user":
        return <Navigate to="/user" />;
      default:
        return <Navigate to="/" />;
    }
  }

  return children;
};

export default RedirectIfAuthenticated;