import Button from '../button/button.component';
import './shop-item.styles.scss'

const ShopItem = ({ item }) => {
  const { name, price, imageUrl} = item;

  return (
    <div className='shop-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to Cart</Button>
    </div>
  )
}

export default ShopItem;
