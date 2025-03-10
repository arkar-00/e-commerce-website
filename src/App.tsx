import { RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout';
import routers from './router/routes';

function App() {
  return (
    // <Layout>
      <RouterProvider router={routers} />
    // </Layout>
  );
}

export default App;

