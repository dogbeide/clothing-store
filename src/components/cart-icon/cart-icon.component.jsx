import { useDispatch, useSelector } from "react-redux";

import { setCartIsOpen } from "../../store/cart/cart.action.js";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector.js";

import {
  CartIconContainer,
  CartIconImage,
  ItemCount,
} from "./cart-icon.styles.jsx";
import ShoppingBagSVG from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const cartIsOpen = useSelector(selectCartIsOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  
  const toggleCartDropdown = () => dispatch(setCartIsOpen(!cartIsOpen));

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <CartIconImage
        className="cart-icon-img"
        src={ShoppingBagSVG}
        alt="cart-icon"
      />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
