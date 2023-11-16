import { HashRouter, Routes, Route } from 'react-router-dom'

// import './assets/index.css'

import Login from './pages/Login'
import Registration from './pages/Registration'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Members from './pages/Members'
import Finance from './pages/Finance'
import Events from './pages/Events'
import Reports from './pages/Reports'
import History from './pages/History'
import Settings from './pages/Settings'

export default function App() {
  return (
    <div className="container-fluid">
      <HashRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/*" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="members" element={<Members />} />
            <Route path="finance" element={<Finance />} />
            <Route path="events" element={<Events />} />
            <Route path="reports" element={<Reports />} />
            <Route path="history" element={<History />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route index element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  )
}
