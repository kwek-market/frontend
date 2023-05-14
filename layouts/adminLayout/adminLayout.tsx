import React, { useState } from "react";
import SideBarAdmin from "./sidebar";
import NavAdmin from "./nav";

type AdminLayoutType = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="admin-layout">
      <SideBarAdmin setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className="lg:tw-ml-[16.25rem]  tw-min-h-screen tw-relative">
        <NavAdmin setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className=" tw-py-12 tw-px-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
