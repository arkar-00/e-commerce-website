import { RouterProvider } from 'react-router-dom';
import routers from './router/routes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
  );
}

export default App;

