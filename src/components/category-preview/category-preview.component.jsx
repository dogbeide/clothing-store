import { Link } from 'react-router-dom';
import ShopItem from '../shop-item/shop-item.component';
import './category-preview.styles.scss'

const CategoryPreview = ({ title, items }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
      {
        items
          .filter((_, idx) => idx < 4)
          .map((item) => <ShopItem key={item.id} item={item} />)
      }
      </div>
    </div>
  )
}

export default CategoryPreview;