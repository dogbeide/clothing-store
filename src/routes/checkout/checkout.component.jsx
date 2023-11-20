import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector.js";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckOutContainer,
  Header,
  HeaderCol,
  ItemsList,
  Total,
} from "./checkout.styles.jsx";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <Total>Total: ${cartTotal}</Total>
    </CheckOutContainer>
  );
};

export default CheckOut;
