import { Link } from "react-router-dom";

const Sidebar = ({ links, isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed lg:static top-0 left-0 h-full w-52 bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`}>
      <button className="lg:hidden text-white p-4" onClick={toggleSidebar}>✕</button>
      <ul className="p-4">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <Link to={link.path} className="block p-2 hover:bg-gray-700 rounded">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;