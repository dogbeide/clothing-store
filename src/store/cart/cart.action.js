import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.type";

export const setCartIsOpen = (cartIsOpen) =>
  createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, cartIsOpen);

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

const _addItemToCart = (item, cartItems) => {
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

const _removeItemFromCart = (item, cartItems) => {
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

const _clearItemFromCart = (item, cartItems) => {
  const newItems = cartItems.filter((cartItem) => cartItem.id != item.id);
  return newItems;
};

export const addItemToCart = (cartItems, item) => {
  const newCartItems = _addItemToCart(item, cartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, item) => {
  const newCartItems = _removeItemFromCart(item, cartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, item) => {
  const newCartItems = _clearItemFromCart(item, cartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearCart = () => {
  const emptyCart = [];
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, emptyCart);
};
