import Header from '../header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
