import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ShopItemContainer, Footer, Name, Price } from "./shop-item.styles.jsx";

const ShopItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => dispatch(addItemToCart(item));

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
