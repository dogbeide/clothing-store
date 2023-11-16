import {
  CartItemContainer,
  ItemDetails,
  Name,
  CountAndPrice
} from './cart-item.styles.jsx';

const CartItem = ({ item }) => {
  const { name, count, price, imageUrl } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <CountAndPrice>{count} x ${price}</CountAndPrice>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;