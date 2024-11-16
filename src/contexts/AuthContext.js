import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';



export const AuthContext = createContext();

const mockUsers = [
  { role: 'admin', email: 'admin', password: '1234' },
  { role: 'employee', email: 'mmm', password: '1234' },
  { role: 'user', email: 'uuu', password: '1234' },
];

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = (email, password) => {
      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        const loggedInUser = { email: foundUser.email, role: foundUser.role };
        setUser(loggedInUser);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        toast.success('เข้าสู่ระบบสำเร็จ');
        return loggedInUser;
      }
      toast.error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      return null;
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('user');
      toast.success('ออกจากระบบสำเร็จ');
    };
  
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };