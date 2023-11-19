import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesPreviewContainer } from "./categories-preview.styles";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const items = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={items} />;
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
