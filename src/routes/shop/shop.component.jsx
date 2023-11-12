import { useContext } from 'react';
import { ShopContext } from '../../contexts/shop.context';
import ShopItem from '../../components/shop-item/shop-item.component';
import './shop.styles.scss';

const Shop = () => {
  const { items } = useContext(ShopContext)

  return (
    <div className='shop-container'>
      {items.map((item) => <ShopItem key={item.id} item={item} />)}
    </div>
  )
}

export default Shop;