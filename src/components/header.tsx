import React, { useState } from 'react';
import { Button } from './ui/button';
import { CircleUser, Menu, ShoppingCart, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const NAV_DATA = {
  header_name: 'SHOP.CO',
  links: [
    { id: 1, name: 'Home', route: '/' },
    { id: 2, name: 'Product', route: '/products' },
    { id: 3, name: 'About', route: '/about' },
  ],
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Logo */}
        <h1 className="font-poppins text-xl font-bold">{NAV_DATA.header_name}</h1>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6">
          {NAV_DATA.links.map((link) => (
            <NavLink
              key={link.id}
              to={link.route}
              className="font-poppins text-gray-700 hover:text-black"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex flex-row">
          <Button variant="ghost" size="icon" onClick={() => navigate('/cart')}>
            <ShoppingCart size={24} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
            <CircleUser size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Fixed Issue) */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center space-y-4 z-50">
          {NAV_DATA.links.map((link) => (
            <NavLink
              key={link.id}
              to={link.route}
              className="font-poppins text-gray-700 hover:text-black"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
