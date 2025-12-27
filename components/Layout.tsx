
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Linkedin, Youtube, Facebook, Instagram, ChevronDown, Globe } from 'lucide-react';

// Custom X (formerly Twitter) Icon SVG
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// Custom Abstract Logo SVG
const AbstractLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z" stroke="currentColor" strokeWidth="4" />
    <path d="M35 45C35 39.4772 39.4772 35 45 35H55C60.5228 35 65 39.4772 65 45V55C65 60.5228 60.5228 65 55 65H45C39.4772 65 35 60.5228 35 55V45Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M45 50C45 47.2386 47.2386 45 50 45C52.7614 45 55 47.2386 55 50C55 52.7614 52.7614 55 50 55C47.2386 55 45 52.7614 45 50Z" fill="currentColor" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A propos', path: '/about' },
    { name: 'news', path: '/blog' },
    { name: 'support', path: '/support' },
    { name: 'voir+ >', path: '/services' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-1' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-white hover:opacity-70 transition-opacity flex-shrink-0">
          <AbstractLogo className="w-8 h-8 md:w-10 md:h-10" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm lg:text-base font-light tracking-tight transition-all duration-300 ${
                location.pathname === link.path ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-5">
          <Link to="/store" className="relative group" title="Store">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all">
              <ShoppingBag size={20} strokeWidth={1.5} className="text-gray-200 group-hover:text-white" />
            </div>
          </Link>

          <Link 
            to="/account" 
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-white transition-all group overflow-hidden"
          >
            {isLoggedIn ? (
              <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User size={20} strokeWidth={1.5} className="text-gray-200 group-hover:text-white" />
            )}
          </Link>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute inset-0 bg-black transition-all duration-500 flex flex-col p-6 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex justify-between items-center mb-10">
            <AbstractLogo className="w-10 h-10 text-white" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-3xl font-extralight tracking-tight">{link.name}</Link>
            ))}
            <Link to="/store" onClick={() => setIsMenuOpen(false)} className="text-3xl font-extralight tracking-tight">Store</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020202] text-[#86868b] pt-16 md:pt-20">
      <div className="container mx-auto px-6">
        {/* Three Column Structure from Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">
          {/* Column 1: Identity */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-white text-3xl font-light tracking-tight">virtssoft<br />technologies Inc,</h4>
            </div>
            <div className="space-y-6 text-sm md:text-base font-light">
              <p>139, Mutongo avenue<br />Mabanga-sud, GOMA, RDC</p>
              <div className="space-y-1">
                <p><span className="font-bold">Phone:</span> +243 849 296 155</p>
                <p><span className="font-bold">Mail:</span> contactvti@virtssoft.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Nos Stores */}
          <div className="space-y-6">
            <h4 className="text-white text-lg font-bold tracking-tight">Nos stores</h4>
            <ul className="space-y-2 text-base font-light">
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>&gt;Goma</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>&gt;Bukavu</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>&gt;Kinshasa</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors font-medium"><span>&gt;voir plus...</span></Link></li>
            </ul>
          </div>

          {/* Column 3: Nos Services */}
          <div className="space-y-6">
            <h4 className="text-white text-lg font-bold tracking-tight">Nos services</h4>
            <ul className="space-y-2 text-base font-light">
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>&gt;Produit IOT</span></Link></li>
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>&gt;Énergies</span></Link></li>
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>&gt;ia</span></Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Part (bottom border and requested fields) */}
        <div className="border-t border-white/10 pt-8 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Restez informer</span>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Facebook size={24} fill="currentColor" /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><XIcon className="w-5 h-5" /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Instagram size={24} /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Youtube size={26} fill="currentColor" /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Linkedin size={24} fill="currentColor" /></a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-medium cursor-pointer group hover:text-white transition-colors">
              <Globe size={14} className="group-hover:text-blue-500" />
              <span>Congo DR <span className="text-gray-500 font-normal ml-1">(Français FR)</span></span>
              <ChevronDown size={14} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[10px] md:text-xs font-medium text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Politique de confidentialité.</Link>
              <span className="text-white/20">|</span>
              <Link to="/cookies" className="hover:text-white transition-colors">Utilisation des cookies</Link>
              <span className="text-white/20">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">Conditions d’utilisation.</Link>
              <span className="text-white/20">|</span>
              <Link to="/legal" className="hover:text-white transition-colors">mentions legales.</Link>
              <span className="text-white/20">|</span>
              <Link to="/sitemap" className="hover:text-white transition-colors">sitemap</Link>
            </div>
            <p className="text-[10px] md:text-xs text-center font-light tracking-wide text-gray-500">
              copyright © 2025, virtssoft technologies Inc, Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-white">
      <Header />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
