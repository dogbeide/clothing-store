import { createContext, useReducer } from "react";

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

const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART: "TOGGLE_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        cartIsOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalCount: 0,
  totalPrice: 0,
});

const INIT_STATE = {
  cartIsOpen: false,
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INIT_STATE);
  const { cartIsOpen, cartItems, totalCount, totalPrice } = state;

  const setCartIsOpen = (cartIsOpen) => {
    dispatch({
      type: CART_ACTIONS.TOGGLE_CART,
      payload: cartIsOpen,
    });
  };
  const updateCartItems = (newCartItems) => {
    const newTotalCount = newCartItems.reduce(
      (count, item) => count + item.count,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (totalPrice, item) => totalPrice + item.count * item.price,
      0
    );
    dispatch({
      type: CART_ACTIONS.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalCount: newTotalCount,
        totalPrice: newTotalPrice,
      },
    });
  };
  const addItemToCart = (item) => {
    const newCartItems = _addItemToCart(item, cartItems);
    updateCartItems(newCartItems);
  };
  const removeItemFromCart = (item) => {
    const newCartItems = _removeItemFromCart(item, cartItems);
    updateCartItems(newCartItems);
  };
  const clearItemFromCart = (item) => {
    const newCartItems = _clearItemFromCart(item, cartItems);
    updateCartItems(newCartItems);
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
