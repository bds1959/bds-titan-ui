// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import * as Icon from 'react-feather'
import classnames from 'classnames'
import Autocomplete from '@components/autocomplete'
import {
  NavItem,
  NavLink,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getBookmarks, updateBookmarked, handleSearchQuery } from '@store/actions/navbar'

const Hamburger = props => {
  // ** Props
  const { setMenuVisibility } = props

  // ** State
  const [value, setValue] = useState('')
  const [openSearch, setOpenSearch] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.navbar)

  // ** ComponentDidMount
  useEffect(() => {
    dispatch(getBookmarks())
  }, [])

  // ** Removes query in store
  const handleClearQueryInStore = () => dispatch(handleSearchQuery(''))

  // ** Loops through Bookmarks Array to return Bookmarks
  const onKeyDown = e => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setTimeout(() => {
        setOpenSearch(false)
        handleClearQueryInStore()
      }, 1)
    }
  }
  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Icon.Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
    </Fragment>
  )
}

export default Hamburger
