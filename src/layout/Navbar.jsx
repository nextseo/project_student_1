import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = ({ toggleSidebar }) => {
  // ต้องการเอา fname และ lname มาโชว์
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p className="text-center text-gray-600">กำลังโหลดข้อมูล...</p>;
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* ปุ่มเปิด Sidebar บนมือถือ */}
      <button className="lg:hidden p-2" onClick={toggleSidebar}>
        ☰
      </button>

      <h1 className="text-lg font-bold">
         {user.emp_fname} {user.emp_lname}{" "}
      </h1>

      <div className="flex items-center space-x-4">
        {user && <span className="text-sm">🔹 {user.role.toUpperCase()}</span>}
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
        >
          ออกจากระบบ
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
