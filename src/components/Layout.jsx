import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {



  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-4 bg-gray-100  h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;