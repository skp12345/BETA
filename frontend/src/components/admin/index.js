import { Add } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Manage Companies",
      icon: <Add />,
      link: "/admin/addtest",
    },
  ];

  return (
    <div>
      <Sidebar sidebarOptions={sidebarOptions} title="Admin Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;
