
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Linkedin, Youtube, Facebook, Instagram, ChevronDown, Globe, Search } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A propos', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO (Gauche) */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center space-x-2 group">
            <AbstractLogo className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform" />
            <span className="hidden lg:block text-lg font-medium tracking-tight text-white uppercase italic">Virtssoft</span>
          </Link>
        </div>

        {/* NAVIGATION CENTRALE (Milieu) */}
        <nav className="hidden md:flex items-center justify-center space-x-8 lg:space-x-10 flex-[2]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] uppercase font-light tracking-[0.2em] transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
        </nav>

        {/* ACTIONS DROITE (Droite) */}
        <div className="flex-1 flex items-center justify-end space-x-5 md:space-x-8">
          <Link to="/store" className="relative group text-gray-400 hover:text-white transition-colors" title="Boutique">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
          </Link>

          <Link to="/account" className="flex items-center group text-gray-400 hover:text-white transition-all" title="Mon Compte">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/5 transition-all">
              <User size={18} strokeWidth={1.5} />
            </div>
          </Link>

          <button className="md:hidden p-1 text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] transition-all duration-500 p-10 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <AbstractLogo className="w-10 h-10 text-white" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col space-y-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-3xl font-extralight tracking-tight hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-6" />
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
    <footer className="bg-[#020202] text-[#86868b] pt-16 md:pt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-white text-3xl font-light tracking-tight">virtssoft<br />technologies Inc,</h4>
            </div>
            <div className="space-y-6 text-sm md:text-base font-light">
              <p>139, Mutongo avenue<br />Mabanga-sud, GOMA, RDC</p>
              <div className="space-y-1">
                <p><span className="font-bold text-gray-400">Phone:</span> +243 849 296 155</p>
                <p><span className="font-bold text-gray-400">Mail:</span> contactvti@virtssoft.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-lg font-bold tracking-tight uppercase text-xs opacity-50">Nos stores</h4>
            <ul className="space-y-2 text-base font-light">
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>&gt; Goma</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>&gt; Bukavu</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>&gt; Kinshasa</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors font-medium"><span>&gt; voir plus...</span></Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-lg font-bold tracking-tight uppercase text-xs opacity-50">Nos services</h4>
            <ul className="space-y-2 text-base font-light">
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>&gt; Produit IOT</span></Link></li>
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>&gt; Énergies</span></Link></li>
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>&gt; IA & Automatisation</span></Link></li>
            </ul>
          </div>
        </div>

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
              <Globe size={14} className="group-hover:text-blue-500 transition-colors" />
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
