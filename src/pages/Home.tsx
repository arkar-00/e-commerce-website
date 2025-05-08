import React from 'react';
import { Button } from '../components/ui/button';
import couple from '../assets/images/home/couple.jpg';
import gucci from '../assets/images/home/gucci.png';
import kelvin from '../assets/images/home/kelvin.png';
import prada from '../assets/images/home/prada.png';
import versace from '../assets/images/home/versace.png';
import zara from '../assets/images/home/zara.png';

const Home = () => {
  return (
    <div className="bg-[#f2f0f1] w-full">
      <div className="grid md:grid-cols-2 container mx-auto px-4">
        <div className="py-5 flex flex-col justify-center transform transition-all duration-700 ease-in-out opacity-100 translate-y-0">
          <h1 className="text-5xl font-bold font-poppins">FIND CLOTHES</h1>
          <h1 className="text-5xl font-bold font-poppins">THAT MATCHES</h1>
          <h1 className="text-5xl font-bold font-poppins">YOUR STYLE</h1>
          <p className="font-poppins text-gray-500 my-5">
            Browse through our diverse range of meticulously crafted garments, designed to bring out
            your individuality and cater to your sense of style.
          </p>
          <Button className="rounded-3xl md:w-1/3 hover:scale-110 duration-300">Shop Now</Button>
          <div className="flex justify-between mt-6">
            <div className="text-center">
              <p className="font-bold text-xl sm:text-3xl">200+</p>
              <p className="font-poppins text-gray-500 text-xs sm:text-sm">International Brands</p>
            </div>
            <div className="border-r-1 border-gray-300 mx-4" />
            <div className="text-center">
              <p className="font-bold text-xl sm:text-3xl">2,000+</p>
              <p className="font-poppins text-gray-500 text-sm">High Quality Products</p>
            </div>
            <div className="border-r-1 border-gray-300 mx-4" />
            <div className="text-center">
              <p className="font-bold text-xl sm:text-3xl">3,000+</p>
              <p className="font-poppins text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center px-6 transform transition-all duration-700 ease-in-out opacity-100 translate-y-0 overflow-hidden">
          <img
            src={couple}
            alt="Couple showcasing fashion"
            className="w-auto h-auto max-h-[600px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="px-4 min-h-[70px] bg-black flex flex-wrap items-center justify-around gap-4 sm:gap-6 sm:py-1">
        {[versace, zara, gucci, prada, kelvin].map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={brand.split('/').pop()?.split('.')[0]}
            className="w-auto h-[16px] sm:h-[20px] transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
