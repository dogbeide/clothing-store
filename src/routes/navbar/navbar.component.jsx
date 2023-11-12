import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
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
          <CartIcon />
        </div>
      </div>
      {/* <Outlet /> */}
    </Fragment>
  )
}

export default NavBar;