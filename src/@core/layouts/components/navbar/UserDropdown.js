// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar
  const [username, setusername] = useState(
    localStorage.getItem('username') || ''
  )
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{username}</span>
          <span className='user-status'>{(userData && userData.role) || 'Admin'}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to='#'>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#'>
          <Mail size={14} className='mr-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#'>
          <CheckSquare size={14} className='mr-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#'>
          <MessageSquare size={14} className='mr-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to='#'>
          <Settings size={14} className='mr-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#'>
          <CreditCard size={14} className='mr-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#'>
          <HelpCircle size={14} className='mr-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
