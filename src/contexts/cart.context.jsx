import { createContext, useEffect, useState } from "react";

const _addItemToCart = (item, cartItems) => {
  let foundItem = false;

  const newItems = cartItems.map(cartItem => {
    if (item.id == cartItem.id) {
      foundItem = true;
      return {...cartItem, count: cartItem.count ? cartItem.count + 1 : 1}
    }
    return cartItem;
  });

  if (!foundItem) {
    newItems.push({
      ...item,
      count: 1
    })
  }

  return newItems;
}

const _removeItemFromCart = (item, cartItems) => {
  const itemToRemove = cartItems.find(cartItem => cartItem.id == item.id);

  const newItems = itemToRemove.count == 1 ?
    cartItems.filter(cartItem => cartItem.id != item.id) : 
    cartItems.map(cartItem => (
      cartItem.id == item.id ? 
        {...cartItem, count: cartItem.count - 1} : 
        {...cartItem}
      )
    )

  return newItems;
}

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeAllOfItemFromCart: () => {},
  totalItemCount: 0,
  totalPrice: 0,
})

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCountTotal = cartItems.reduce((countTotal, item) => countTotal + item.count, 0);
    setTotalItemCount(newCountTotal);
    const newTotalPrice = cartItems.reduce((total, item) => item.price * item.count + total, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems])

  const addItemToCart = (item) => {
    const newItems = _addItemToCart(item, cartItems);
    setCartItems(newItems);
  }

  const removeItemFromCart = (item) => {
    const newItems = _removeItemFromCart(item, cartItems);
    setCartItems(newItems);
  }

  const removeAllOfItemFromCart = (item) => {
    const newItems = cartItems.filter((cartItem) => cartItem.id != item.id);
    setCartItems(newItems);
  }

  const value = {
    isOpen, 
    setIsOpen, 
    cartItems, 
    addItemToCart, 
    removeItemFromCart, 
    removeAllOfItemFromCart, 
    totalItemCount,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}