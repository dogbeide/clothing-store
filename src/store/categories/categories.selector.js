export const selectCategoriesMap = (state) => {
  console.log("selectCategoriesMap()");
  return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category; // destructure off data we need from docsnapshot
    acc[title.toLowerCase()] = items; // add objects of title to new object
    return acc; // give it to huge batch
  }, {});
};
