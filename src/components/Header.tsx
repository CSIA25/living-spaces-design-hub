
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-gray-800 tracking-wide">LIVING SPACES</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Home</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Portfolio</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Home</a>
              <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Portfolio</a>
              <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors text-sm uppercase tracking-wider">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
