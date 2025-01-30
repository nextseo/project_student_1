import { Link, useLocation } from "react-router-dom";


const Sidebar = ({ links, isOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <aside className={`fixed lg:static top-0 left-0 h-full w-52 bg-gray-800 text-white transform border-r border-gray-300 shadow-sm ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`}>
      <button className="lg:hidden text-white p-4" onClick={toggleSidebar}>✕</button>

      <ul className="p-4">
        <li className="p-2 font-medium border-b border-gray-300 mb-4">ระบบจัดการร้านเค้ก</li>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <Link to={link.path} className={`block p-2 hover:bg-gray-300 hover:text-black rounded ${location.pathname == link.path ? "bg-gray-400": "" }`}>
              {link.label} 
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;