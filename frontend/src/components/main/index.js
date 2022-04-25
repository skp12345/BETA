import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import Header from './header2';

const Main = () => {
  return (
    <div>
      <Header />
        <Outlet />
    </div>
  )
}

export default Main;