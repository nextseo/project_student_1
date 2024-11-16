import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const RedirectIfAuthenticated = ({ children }) => {
  const { user } = useContext(AuthContext);

  // ถ้าผู้ใช้ล็อกอินแล้ว ให้นำไปยังหน้าตาม role ของผู้ใช้
  if (user) {
    if (user.role === 'admin') return <Navigate to="/admin" />;
    if (user.role === 'employee') return <Navigate to="/employee" />;
    if (user.role === 'user') return <Navigate to="/user" />;
  }
  
  // ถ้าผู้ใช้ยังไม่ล็อกอิน ให้แสดงเนื้อหาปกติ
  return children;
};

export default RedirectIfAuthenticated;