import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Logo from "../../assets/reeftipus_41x38.svg";
import { CartContext } from "../../contexts/cart.context";

import {
  NavBarContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navbar.styles.jsx";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen } = useContext(CartContext);

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
