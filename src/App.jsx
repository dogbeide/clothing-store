import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./store/user/user.action";

import NavBar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
