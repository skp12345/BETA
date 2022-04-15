import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';

const Company = () => {
  return (
    <div>
      <Sidebar>

        <Outlet />
      </Sidebar>
    </div>
  )
}

export default Company;