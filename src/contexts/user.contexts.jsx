import { createContext, useState } from "react";

// actual value being stored
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// component that holds and wraps around data
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}