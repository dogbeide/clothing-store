
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";

import NavBar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser = user && (({ accessToken, email }) => ({accessToken, email}))(user);
      console.log('our action', setCurrentUser(user));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
};

export default App;
