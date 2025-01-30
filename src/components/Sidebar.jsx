import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();


  const menuAdmin_1 = [
    {id:0, name : "หมวดหมู่", to:"/admin/categorys"},
    {id:1, name : "สินค้า", to:"/admin/products"},
    {id:2, name : "วัติถุดิบ", to:"/"},
    {id:3, name : "เบิกวัติถุดิบ", to:"/"},
    {id:4, name : "สต๊อกสินค้า", to:"/"},
  ]

  const menuAdmin_2 = [
    {id:0, name : 'รายงานยอดขาย', to: "/"},
    {id:0, name : 'รายงานข้อมูลสินค้า', to: "/"},
    {id:0, name : 'รายงานยอดขาย', to: "/"},
  ]
  return (


    <div>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full border-r border-gray-200 w-64 bg-white shadow-lg p-4 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <nav>
          <ul className="flex flex-col gap-3">
            {menuAdmin_1.map((item)=> (
              <li key={item.id} className={`${location.pathname == item.to ? "bg-red-500 text-white" : "text-black"} px-4 py-1 rounded-md  `}>
                <Link to={item.to}>{item.name} </Link>
              </li>
            ))}
          </ul>
        
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
