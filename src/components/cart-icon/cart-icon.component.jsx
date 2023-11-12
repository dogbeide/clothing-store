import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
import ShoppingBagSVG from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isOpen, setIsOpen, totalItemCount } = useContext(CartContext);
  const toggleCartDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <img className="cart-icon-img" src={ShoppingBagSVG} alt="cart-icon" />
      <span className="item-count">{totalItemCount}</span>
    </div>
  );
};

export default CartIcon;
