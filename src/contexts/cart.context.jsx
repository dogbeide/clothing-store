import { createContext, useState } from "react";

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

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => false,
  cartItems: [],
  addCartItem: () => {},
  totalItemCount: 0
})

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const addItemToCart = (item) => {
    const newItems = _addItemToCart(item, cartItems);
    setCartItems(newItems);
    const newCountTotal = newItems.reduce((countTotal, item) => countTotal + item.count, 0);
    setTotalItemCount(newCountTotal);
  }

  const value = {isOpen, setIsOpen, cartItems, addItemToCart, totalItemCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}