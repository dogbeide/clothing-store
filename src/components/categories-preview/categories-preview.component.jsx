import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

import Spinner from "../spinner/spinner.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <CategoriesPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const items = categoriesMap[title];
          return <CategoryPreview key={title} title={title} items={items} />;
        })
      )}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
