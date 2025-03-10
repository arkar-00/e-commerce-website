import Header from '../header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
