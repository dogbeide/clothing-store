import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckOutItemContainer,
  ImageContainer,
  Name,
  Price,
  Count,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, count } = cartItem;

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Count>
        <Arrow onClick={removeItemHandler}>&lt;</Arrow>
        <Value>{count}</Value>
        <Arrow onClick={addItemHandler}>&gt;</Arrow>
      </Count>
      <Price>${price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
