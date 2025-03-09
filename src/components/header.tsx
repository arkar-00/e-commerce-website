import React, { useState } from 'react';
import { Button } from './ui/button';
import { CircleUser, Menu, ShoppingCart, X } from 'lucide-react';

const NAV_DATA = {
  header_name: 'SHOP.CO',
  links: [
    { id: 1, name: 'On Sale', href: '#on_sale' },
    { id: 2, name: 'New Arrivals', href: '#new_arrivals' },
    { id: 3, name: 'Brands', href: '#brands' },
  ],
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <nav className="hidden md:flex gap-6">
          {NAV_DATA.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-poppins text-gray-700 hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex flex-row">
          <Button variant="ghost" size="icon">
            <ShoppingCart size={24} />
          </Button>
          <Button variant="ghost" size="icon">
            <CircleUser size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Fixed Issue) */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center space-y-4 z-50">
          {NAV_DATA.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-poppins text-gray-700 hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
