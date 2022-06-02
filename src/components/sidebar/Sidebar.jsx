import './sidebar.scss'
import {
  DashboardOutlined,
  PersonOutlineOutlined,
  CreditCardOutlined,
  AddBusiness,
  LocalShippingOutlined,
  NotificationsNoneOutlined,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
  LogoutOutlined,
  BarChart,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <span className='logo'>Anjoradmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardOutlined className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LIST</p>
          <li>
            <Link to={'/users'} style={{ textDecoration: 'none' }}>
              <PersonOutlineOutlined className='icon' />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to={'/products'} style={{ textDecoration: 'none' }}>
              <AddBusiness className='icon' />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditCardOutlined className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlined className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <BarChart className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlined className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlined className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlined className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
