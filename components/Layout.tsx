
import React, { useState, useEffect } from 'react';
// Use namespace import to resolve missing exported member errors for Link and useLocation
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useLocation } = ReactRouterDOM as any;
import { ShoppingBag, User, Menu, X, Linkedin, Youtube, Facebook, Instagram, ChevronDown, Globe, Search } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black/95 md:bg-black/80 backdrop-blur-2xl py-3 border-b border-white/10 shadow-lg' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* [ LOGO ] */}
        <div className="flex-[1] flex justify-start items-center">
          <Link to="/" className="flex items-center group outline-none">
            <img 
              src="/assets/images/logo.png" 
              alt="Virtssoft Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* [ NAVIGATION ] */}
        <nav className="hidden md:flex flex-[2] items-center justify-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase font-bold tracking-[0.3em] transition-all duration-300 relative group py-2 ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </nav>

        {/* [ ACTIONS ] */}
        <div className="flex-[1] flex items-center justify-end space-x-6">
          <button className="hidden sm:block text-gray-400 hover:text-white transition-colors p-1" aria-label="Recherche">
            <Search size={18} strokeWidth={1.5} />
          </button>
          
          <Link to="/store" className="relative group text-gray-400 hover:text-white transition-colors p-1" aria-label="Panier">
            <ShoppingBag size={19} strokeWidth={1.5} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0a0a0a]" />
          </Link>

          <Link to="/account" className="hidden sm:flex items-center group" aria-label="Compte">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/5 transition-all">
              <User size={16} strokeWidth={1.5} className="text-gray-400 group-hover:text-white" />
            </div>
          </Link>

          <button 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] transition-all duration-700 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0a] transition-all duration-700 p-10 flex flex-col shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <img src="/assets/images/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
          </div>
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-4xl font-light tracking-tight hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <Link to="/store" onClick={() => setIsMenuOpen(false)} className="text-xl font-light text-gray-400 hover:text-white flex items-center justify-between">
              <span>Boutique</span>
              <ShoppingBag size={20} />
            </Link>
            <Link to="/account" onClick={() => setIsMenuOpen(false)} className="text-xl font-light text-gray-400 hover:text-white flex items-center justify-between">
              <span>Mon Compte</span>
              <User size={20} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020202] text-[#86868b] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h4 className="text-white text-4xl font-light tracking-tighter">virtssoft<br />technologies Inc.</h4>
            <p className="max-w-xs text-sm leading-relaxed">Innovons ensemble pour un avenir plus intelligent et durable à travers l'Afrique et le monde.</p>
          </div>

          <div className="space-y-6">
            <h5 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Explorer</h5>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Contact</h5>
            <ul className="space-y-3 text-sm font-light">
              <li className="text-gray-400">Goma, Nord-Kivu, RDC</li>
              <li className="text-gray-400">+243 849 296 155</li>
              <li className="text-gray-400">contactvti@virtssoft.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><XIcon className="w-4 h-4" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            <p>&copy; 2025 VIRTSOFT TECHNOLOGIES</p>
            <Link to="/privacy" className="hover:text-white">Confidentialité</Link>
            <Link to="/legal" className="hover:text-white">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
