import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Layout from '../components/layout/layout';
import Login from '../pages/Login';
import { PrivateRoute } from '../context/AuthContext';

const routers = createBrowserRouter([
  {
    element: <Layout />, // Public Layout
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Product /> },
      { path: '/about', element: <About /> },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default routers;
