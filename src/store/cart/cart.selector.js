import { createSelector } from "reselect";

const selectCartReducer = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.cartItems;
  }
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => {
    return cartReducer.cartIsOpen;
  }
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    const newTotalCount = cartItems.reduce(
      (count, item) => count + item.count,
      0
    );
    return newTotalCount;
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    const newCartTotal = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.count * item.price,
      0
    );
    return newCartTotal;
  }
);
