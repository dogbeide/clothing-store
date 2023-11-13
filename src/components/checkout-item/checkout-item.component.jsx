import { useContext } from 'react';
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeAllOfItemFromCart} = useContext(CartContext)
  const { name, imageUrl, price, count } = cartItem;
  
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeAllOfItemHandler = () => removeAllOfItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='count'>
        <span className='arrow' onClick={removeItemHandler}>&lt;</span>
        <span className='value'>{count}</span>
        <span className='arrow' onClick={addItemHandler}>&gt;</span>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={removeAllOfItemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckOutItem;