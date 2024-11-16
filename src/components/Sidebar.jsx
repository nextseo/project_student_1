import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-white border-r border-gray-200 w-64 min-h-screen p-4">
    <nav>
      <ul>
        <li className='bg-purple-700 text-white px-4 rounded-md'>
          <Link  to="/admin" className="block py-2">Admin</Link>
        </li>
        <li>
          <Link to="/employee" className="block py-2 px-4">Employee</Link>
        </li>
        <li>
          <Link to="/user" className="block py-2 px-4">User</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;