import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesPreviewContainer } from './categories-preview.styles';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <CategoriesPreviewContainer>
      {
      Object.keys(categoriesMap).map((title) => {
        const items = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={items} />
      })
    }
    </CategoriesPreviewContainer>
  )
}

export default CategoriesPreview;