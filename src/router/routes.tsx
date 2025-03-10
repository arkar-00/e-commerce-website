import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Layout from '../components/layout/layout';

const routers = createBrowserRouter([
  {
    element: <Layout />, // Public Layout
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Product /> },
      { path: '/about', element: <About /> },
      { path: '/cart', element: <Cart /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
]);

export default routers;
