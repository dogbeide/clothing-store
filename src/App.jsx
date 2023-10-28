import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';

const Shop = () => <div>shopshop</div>;

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}
  
export default App;
