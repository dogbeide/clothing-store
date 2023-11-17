import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  CartIconImage,
  ItemCount,
} from "./cart-icon.styles.jsx";
import ShoppingBagSVG from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, totalItemCount } = useContext(CartContext);
  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen);

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <CartIconImage
        className="cart-icon-img"
        src={ShoppingBagSVG}
        alt="cart-icon"
      />
      <ItemCount className="item-count">{totalItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
