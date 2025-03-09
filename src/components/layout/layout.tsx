import React from 'react';
import Header from '../header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
