import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";

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
  const { name, imageUrl, price, count } = cartItem;
  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

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
