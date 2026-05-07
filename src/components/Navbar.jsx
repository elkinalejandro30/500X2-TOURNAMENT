import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Anuncios', path: '/anuncios' },
    { name: 'Estadísticas', path: '/estadisticas' },
    { name: 'Info del Mapa', path: '/info-mapa' },
    { name: 'Registro / Reportes', path: '/registro-reportes' },
    { name: 'Reglamento', path: '/reglamento' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-6'} px-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section - Premium Integration */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center group">
            <div className="relative flex items-center">
              <img 
                src="https://i.pinimg.com/736x/53/7c/f8/537cf8ded68d34e5a67b23020c703105.jpg" 
                alt="Comunidad" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-militar-accent object-cover shadow-[0_0_15px_rgba(196,164,86,0.3)] group-hover:shadow-[0_0_20px_rgba(196,164,86,0.5)] transition-all duration-300"
              />
              <div className="flex flex-col ml-3">
                <span className="text-sm md:text-base font-black tracking-[0.2em] text-white uppercase leading-none">
                BATALLON
              </span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-militar-accent uppercase mt-1">
                  SUPREMACY
                </span>
              </div>
            </div>
          </Link>
          
          <div className="h-8 w-[1px] bg-white/20 mx-4 hidden md:block" />
          
          <a 
            href="https://www.supremacy1914.es/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <img 
              src="https://i.gyazo.com/87861a1855425f13ec62c7f1e0b93fb0.png" 
              alt="Supremacy 1914" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-110 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group ${isActive(link.path) ? 'text-militar-accent' : 'text-militar-light/70 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-militar-accent transform transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-militar-light p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-militar-dark/98 backdrop-blur-2xl border-t border-white/5 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs uppercase tracking-[0.4em] font-bold py-2 ${isActive(link.path) ? 'text-militar-accent' : 'text-militar-light/60'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
