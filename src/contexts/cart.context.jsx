import { createContext, useEffect, useReducer, useState } from "react";

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

const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_ITEM: "CLEAR_ITEM",
  TOGGLE_CART: "TOGGLE_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.ADD_ITEM:
    case CART_ACTIONS.REMOVE_ITEM:
    case CART_ACTIONS.CLEAR_ITEM:
    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        cartIsOpen: !state.cartIsOpen,
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
  removeAllOfItemFromCart: () => {},
  totalItemCount: 0,
  totalPrice: 0,
});

const INIT_STATE = {
  cartIsOpen: false,
  cartItems: [],
  totalItemCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  // const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INIT_STATE);

  const { cartIsOpen } = state;
  const setCartIsOpen = () => {
    dispatch({
      type: CART_ACTIONS.TOGGLE_CART,
      payload: null
    });
  };

  useEffect(() => {
    const newCountTotal = cartItems.reduce(
      (countTotal, item) => countTotal + item.count,
      0
    );
    setTotalItemCount(newCountTotal);
    const newTotalPrice = cartItems.reduce(
      (total, item) => item.price * item.count + total,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (item) => {
    const newItems = _addItemToCart(item, cartItems);
    setCartItems(newItems);
  };

  const removeItemFromCart = (item) => {
    const newItems = _removeItemFromCart(item, cartItems);
    setCartItems(newItems);
  };

  const removeAllOfItemFromCart = (item) => {
    const newItems = cartItems.filter((cartItem) => cartItem.id != item.id);
    setCartItems(newItems);
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeAllOfItemFromCart,
    totalItemCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
