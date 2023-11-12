import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shop-data.json'

export const ShopContext = createContext({
  currentItems: [],
  setCurrentItems: () => []
});

export const ShopProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const value = {items}

  useEffect(() => {
    setItems(SHOP_DATA);
  }, []);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
