import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navbar.styles.scss'
import Logo from '../../assets/reeftipus_41x38.svg'

const NavBar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <Link className="logo-container" to='/'>
          <img className='logo' src={Logo} alt="reeftipus logo" />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to='/shop'>
            SHOP
          </Link>
          <Link className="sign-in" to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  )
}

export default NavBar;