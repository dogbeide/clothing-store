import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';

const Shop = () => <div>shopshop</div>;

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Routes>
    </>
  );
}
  
export default App;
