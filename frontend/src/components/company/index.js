import { Add, Edit, NoteAdd } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Company = () => {
  const sidebarOptions = [
    {
      name: "Add Test",
      icon: <Add />,
      link: "/company/addtest",
    },
    {
      name: "Manage Test",
      icon: <Edit />,
      link: "/company/managetest",
    },
    {
      name: "Manage Feedbacks",
      icon: <NoteAdd />,
      link: "/company/managefeedbacks",
    },
  ];

  return (
    <div>
      <Sidebar sidebarOptions={sidebarOptions} title="Company Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Company;
