import { Link } from 'react-scroll';
import { Menu, X, Home, User, Briefcase, Code2, Award, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', to: 'about', icon: <User className="w-5 h-5" /> },
    { name: 'Skills', to: 'skills', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Projects', to: 'projects', icon: <Code2 className="w-5 h-5" /> },
    { name: 'Contact', to: 'contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fadeInDown">
      {/* Desktop Pill Navbar */}
      <div
        className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-purple-500/10'
            : 'glass'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80}
            className="relative p-3 rounded-full text-gray-400 hover:text-white cursor-pointer transition-all duration-300 hover:bg-white/10 group"
            activeClass="!text-white !bg-white/10"
            spy={true}
          >
            {link.icon}
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900/90 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full glass text-gray-300 hover:text-white transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Container */}
      {isOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-[#0a0a1a]/80 backdrop-blur-sm z-[-1]"
            onClick={() => setIsOpen(false)}
          />
          <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm glass-strong rounded-2xl p-4 animate-fadeInDown">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-all duration-200"
                >
                  {link.icon}
                  <span className="text-base font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
