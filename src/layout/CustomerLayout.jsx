import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const links = [
    { path: "/customer", label: "Dashboard" },
    { path: "/customer/orders", label: "Orders" },
  ];

  return (
    <div className="flex">
      <Sidebar links={links} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 lg:ml-64">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CustomerLayout;