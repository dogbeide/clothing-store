import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopItem from "../../components/shop-item/shop-item.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ShopItem key={product.id} item={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
