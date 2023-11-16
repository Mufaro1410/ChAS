import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import home from '../assets/images/home.png'

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [ind, setInd] = useState(0)

  const navigate = useNavigate()

  const Menus = [
    { id: 1, title: 'Dashboard', src: home },
    { id: 2, title: 'Members', src: 'User' },
    { id: 3, title: 'Finance', src: 'Chat', gap: false },
    { id: 4, title: 'Events ', src: 'Calendar' },
    { id: 5, title: 'Reports', src: 'Chart' },
    { id: 6, title: 'History', src: 'Folder' },
    { id: 7, title: 'Settings', src: 'Setting' },
    { id: 8, title: 'Logout', src: 'Folder' }
  ]

  function navigation(menu) {
    setInd(menu.id)
    menu.title !== 'Logout' ? navigate(menu.title.toLowerCase()) : navigate('/login')
  }

  return (
    <nav className="nav navbar-expand-lg bg-body-tertiary mt-2">
      <div className="container-fluid h-100">
        <h1 className="">
          <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          St Peters UMC
        </h1>
        <div className="collapse navbar-collapse">
          <ul className="nav flex-column">
            {Menus.map((menu) => (
              <li
                key={menu.id}
                className="nav-link"
                aria-current={menu.id}
                onClick={() => {
                  navigation(menu)
                }}
              >
                <img src={menu.src} />
                <span className="navbar-brand">{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
