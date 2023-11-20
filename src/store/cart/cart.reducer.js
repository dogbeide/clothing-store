import { CART_ACTION_TYPES } from "./cart.type";

export const INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_IS_OPEN:
      return {
        ...state,
        cartIsOpen: payload,
      };
    default:
      return state;
  }
};
