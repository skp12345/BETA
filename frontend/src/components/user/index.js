import { AccountCircle, CheckCircleSharp } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const User = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "Enrolled Tests",
      icon: <CheckCircleSharp />,
      link: "/user/enrolled",
    },
  ];

  return (
    <div className="userback">
      <Sidebar sidebarOptions={sidebarOptions} title="User Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};
export default User;
