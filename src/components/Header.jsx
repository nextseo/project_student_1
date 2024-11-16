import React,  { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // เปลี่ยนเส้นทางไปยังหน้า '/'
      };
    
  return (
    <header className="bg-white border-b border-gray-200 shadow-xl rounded-sm">

      <div className="flex justify-between p-4">
      <h1 className="text-2xl">ระบบจัดการผู้ใช้</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            ออกจากระบบ
          </button>
        </div>
    </header>
  );
};

export default Header;