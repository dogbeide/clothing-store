import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ShopItemContainer, Footer, Name, Price } from "./shop-item.styles.jsx";

const ShopItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, item));

  return (
    <ShopItemContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to Cart
      </Button>
    </ShopItemContainer>
  );
};

export default ShopItem;
