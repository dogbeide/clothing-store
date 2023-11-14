import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<CheckOut />} />
      </Routes>
    </>
  );
}
  
export default App;
