import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckOutContainer,
  Header,
  HeaderCol,
  ItemsList,
  Total,
} from "./checkout.styles.jsx";

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <Header>
        <HeaderCol>
          <span>Product</span>
        </HeaderCol>
        <HeaderCol>
          <span>Description</span>
        </HeaderCol>
        <HeaderCol>
          <span>Quantity</span>
        </HeaderCol>
        <HeaderCol>
          <span>Price</span>
        </HeaderCol>
        <HeaderCol>
          <span>Remove</span>
        </HeaderCol>
      </Header>
      <ItemsList>
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ItemsList>
      <Total>Total: ${totalPrice}</Total>
    </CheckOutContainer>
  );
};

export default CheckOut;
