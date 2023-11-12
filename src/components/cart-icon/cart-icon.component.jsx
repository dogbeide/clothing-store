import './cart-icon.styles.scss';
import ShoppingBagSVG from '../../assets/shopping-bag.svg'

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <img className='cart-icon-img' src={ShoppingBagSVG} alt='cart-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;