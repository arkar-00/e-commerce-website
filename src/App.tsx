import Layout from './components/layout/layout';
import Brand from './features/Brand';
import NewArrival from './features/NewArrival';
import OnSale from './features/OnSale';

function App() {
  return (
    <Layout>
      <OnSale />
      <NewArrival />
      <Brand />
    </Layout>
  );
}

export default App;

