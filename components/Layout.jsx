import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white scrollbar">
        <div className="flex overflow-auto ">          
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
