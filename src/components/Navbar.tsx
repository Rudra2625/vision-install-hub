
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary-dark text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">VisionSecure</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-highlight transition-colors">Home</Link>
          <Link to="/products" className="hover:text-highlight transition-colors">Products</Link>
          <Link to="/services" className="hover:text-highlight transition-colors">Services</Link>
          <Link to="/about" className="hover:text-highlight transition-colors">About</Link>
          <Link to="/contact" className="hover:text-highlight transition-colors">Contact</Link>
          <Button variant="default" className="bg-highlight hover:bg-blue-700">Get a Quote</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="hover:text-highlight transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="hover:text-highlight transition-colors" onClick={toggleMenu}>Products</Link>
            <Link to="/services" className="hover:text-highlight transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="hover:text-highlight transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="hover:text-highlight transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button variant="default" className="bg-highlight hover:bg-blue-700 w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
