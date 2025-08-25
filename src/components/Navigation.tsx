import React from "react";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  return (
    <nav className={`flex gap-20  ${className}`}>
      <a href="#Home" className="font-bold text-3xl text-red-500 hover:text-red-600 hover:underline">Home</a>
      <a href="#Flowers" className="font-bold text-3xl text-red-500 hover:text-red-600 hover:underline">Flowers</a>
      <a href="#Bouquet" className="font-bold text-3xl text-red-500 hover:text-red-600 hover:underline">Bouquet</a>
      <a href="#About" className="font-bold text-3xl text-red-500 hover:text-red-600 hover:underline">About-us</a>
      <a href="#Contact" className="font-bold text-3xl text-red-500 hover:text-red-600 hover:underline">Contact-us</a>
    </nav>
  );
};
