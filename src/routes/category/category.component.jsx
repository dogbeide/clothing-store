import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';
import ShopItem from '../../components/shop-item/shop-item.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <div className='category-container'>
      {products &&
        products.map((product) => <ShopItem key={product.id} item={product} />)
      }
    </div>
  )
}

export default Category;