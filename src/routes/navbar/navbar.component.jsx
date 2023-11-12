import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navbar.styles.scss'
import Logo from '../../assets/reeftipus_41x38.svg'

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

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
          {
            currentUser ? (
              <span className="navbar-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="sign-in" to='/auth'>
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  )
}

export default NavBar;