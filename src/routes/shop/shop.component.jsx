import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className='shop-container'>
    {
      Object.keys(categoriesMap).map((title) => {
        const items = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={items} />
      })
    }
    </div>
  )
}

export default Shop;