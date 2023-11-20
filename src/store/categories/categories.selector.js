import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer], // [foo1, foo2, ... , foon]
  (categoriesReducer) => {
    // (result of foo1, result of foo2, ..., result of foon) => {}
    return categoriesReducer.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories], //*** */ run this to compare against NEW output --- "foos to memoize"
  (categories) => {
    //*** */ only run if categories param !== selectCategories(). New object --- "check memoized params from foos"
   return categories.reduce((acc, category) => {
      const { title, items } = category; // destructure off data we need from docsnapshot
      acc[title.toLowerCase()] = items; // add objects of title to new object
      return acc; // give it to huge batch
    }, {});
  }
);

/* REPLACED BY ^^^ ALL OF */
/************************ */
// export const selectCategoriesMap = (state) => {
//   console.log("selectCategoriesMap()");
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category; // destructure off data we need from docsnapshot
//     acc[title.toLowerCase()] = items; // add objects of title to new object
//     return acc; // give it to huge batch
//   }, {});
// };
