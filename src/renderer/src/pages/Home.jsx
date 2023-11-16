import { Outlet } from 'react-router-dom'
// import { useEffect } from 'react';

import Sidebar from '../components/Sidebar'
// import Members from './Members';

export default function Home() {
  return (
    <div className="container-fluid d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  )
}
