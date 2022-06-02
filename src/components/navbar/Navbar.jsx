import { useContext } from 'react'
import {
  LanguageOutlined,
  SearchOutlined,
  DarkModeOutlined,   
  FullscreenOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutline,
  ListOutlined
} from '@mui/icons-material'
import { DarkModeContext } from '../../context/darkModeContext'
import './navbar.scss'

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)


  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlined />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' onClick={() => dispatch({type:"TOGGLE"})} />
          </div>
          <div className='item'>
            <FullscreenOutlined className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlined className='icon' />
            <div className="counter">1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutline className='icon' />
            <div className="counter">2</div>
          </div>
          <div className='item'>
            <ListOutlined className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=500'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
