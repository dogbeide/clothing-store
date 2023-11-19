import { Fragment, useContext } from "react";
import { useSelector } from 'react-redux'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector.js";

import Logo from "../../assets/reeftipus_41x38.svg";
import {
  NavBarContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navbar.styles.jsx";

const NavBar = () => {
  const { cartIsOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <NavBarContainer>
        <LogoContainer to="/">
          <img className="logo" src={Logo} alt="reeftipus logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="navbar-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="navbar-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="sign-in" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {cartIsOpen ? <CartDropdown /> : null}
      </NavBarContainer>
      {/* <Outlet /> */}
    </Fragment>
  );
};

export default NavBar;
