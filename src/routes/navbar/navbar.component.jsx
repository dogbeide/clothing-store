import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signOutStart } from "../../store/user/user.action.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectCartIsOpen } from "../../store/cart/cart.selector.js";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import Logo from "../../assets/reeftipus_41x38.svg";
import {
  NavBarContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navbar.styles.jsx";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(selectCartIsOpen);
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = () => dispatch(signOutStart());

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
            <NavLink as="span" className="navbar-link" onClick={signOutHandler}>
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
