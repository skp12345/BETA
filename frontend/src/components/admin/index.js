import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

const Admin = () => {
  return (
    <div>
        <h1>Admin here</h1>
        <Sidebar>
        <Outlet />
        </Sidebar>
    </div>
  )
}

export default Admin;