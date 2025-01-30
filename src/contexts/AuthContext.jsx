import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("auth_react");
    console.log({storedUser});
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("auth_react");
      }
    }
  }, []);

  // 🔹 ตรวจสอบ LocalStorage ทุกครั้งที่ user เปลี่ยนแปลง
  useEffect(() => {
    if (user) {
      localStorage.setItem("auth_react", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth_react");
    }
  }, [user]); // ✅ ตรวจสอบการเปลี่ยนแปลงของ `user`

  const login = (userData) => {
    // localStorage.setItem("auth_react", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth_react");
    setUser(null);
    window.location.reload()
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};