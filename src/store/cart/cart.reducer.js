import { createSlice } from "@reduxjs/toolkit";

const _addItemToCart = (cartItems, item) => {
  let foundItem = false;

  const newItems = cartItems.map((cartItem) => {
    if (item.id == cartItem.id) {
      foundItem = true;
      return { ...cartItem, count: cartItem.count ? cartItem.count + 1 : 1 };
    }
    return cartItem;
  });

  if (!foundItem) {
    newItems.push({
      ...item,
      count: 1,
    });
  }

  return newItems;
};

const _removeItemFromCart = (cartItems, item) => {
  const itemToRemove = cartItems.find((cartItem) => cartItem.id == item.id);

  const newItems =
    itemToRemove.count == 1
      ? cartItems.filter((cartItem) => cartItem.id != item.id)
      : cartItems.map((cartItem) =>
          cartItem.id == item.id
            ? { ...cartItem, count: cartItem.count - 1 }
            : { ...cartItem }
        );

  return newItems;
};

const _clearItemFromCart = (cartItems, item) => {
  const newItems = cartItems.filter((cartItem) => cartItem.id != item.id);
  return newItems;
};

export const INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartIsOpen(state, action) {
      state.cartIsOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = _addItemToCart(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = _removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = _clearItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const { setCartIsOpen, addItemToCart, removeItemFromCart, clearItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.SET_CART_IS_OPEN:
//       return {
//         ...state,
//         cartIsOpen: payload,
//       };
//     default:
//       return state;
//   }
// };
