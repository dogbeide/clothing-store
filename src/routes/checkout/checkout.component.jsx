import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-col'>
          <span>Product</span>
        </div>
        <div className='header-col'>
          <span>Description</span>
        </div>
        <div className='header-col'>
          <span>Quantity</span>
        </div>
        <div className='header-col'>
          <span>Price</span>
        </div>
        <div className='header-col'>
          <span>Remove</span>
        </div>
      </div>
      <div className='items-list'>
        {cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} cartItem={cartItem} /> )}
      </div>
      <span className='total'>Total: ${totalPrice}</span>
    </div>
  )
}

export default CheckOut;
