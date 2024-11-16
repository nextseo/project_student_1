import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
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
          <ul>
            <li className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-4 rounded-md">
              <Link to="/admin" className="block py-2" onClick={toggleSidebar}>
                Menu 1
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/employee"
                className="block py-2"
                onClick={toggleSidebar}
              >
                Menu 2
              </Link>
            </li>
            <li className="px-4">
              <Link to="/user" className="block py-2" onClick={toggleSidebar}>
                Menu 3
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
