
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
    <circle cx="50" cy="50" r="5" fill="currentColor" />
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
    { name: 'À propos', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass py-3' : 'bg-transparent py-7'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* [ LOGO ] - Zone Gauche (Un tiers de la largeur) */}
        <div className="flex-1 flex justify-start items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <AbstractLogo className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform duration-500" />
            <span className="hidden lg:block text-lg font-light tracking-widest text-white uppercase italic">
              Virts<span className="font-bold">soft</span>
            </span>
          </Link>
        </div>

        {/* [ NAVIGATION ] - Zone Centrale (Un tiers de la largeur, centré) */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase font-medium tracking-[0.25em] transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
        </nav>

        {/* [ ACTIONS ] - Zone Droite (Un tiers de la largeur, aligné à droite) */}
        <div className="flex-1 flex items-center justify-end space-x-6 md:space-x-8">
          <button className="hidden sm:block text-gray-400 hover:text-white transition-colors duration-300" title="Recherche">
            <Search size={18} strokeWidth={1.5} />
          </button>
          
          <Link to="/store" className="relative group text-gray-400 hover:text-white transition-colors duration-300" title="Store">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-blue-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </Link>

          <Link to="/account" className="flex items-center group text-gray-400 hover:text-white transition-all duration-300" title="Compte">
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/5 transition-all">
              <User size={18} strokeWidth={1.5} />
            </div>
          </Link>

          <button className="md:hidden p-1 text-white hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] transition-all duration-700 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] transition-all duration-700 p-10 flex flex-col border-l border-white/5 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <AbstractLogo className="w-10 h-10 text-white" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={32} strokeWidth={1.2} />
            </button>
          </div>
          <nav className="flex flex-col space-y-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-4xl font-extralight tracking-tight hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-6" />
            <Link to="/store" onClick={() => setIsMenuOpen(false)} className="text-xl font-light text-gray-400 hover:text-white flex items-center justify-between group">
              <span>Boutique</span>
              <ShoppingBag size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/account" onClick={() => setIsMenuOpen(false)} className="text-xl font-light text-gray-400 hover:text-white flex items-center justify-between group">
              <span>Mon Compte</span>
              <User size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020202] text-[#86868b] pt-16 md:pt-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-white text-4xl font-light tracking-tighter">virtssoft<br />technologies Inc,</h4>
            </div>
            <div className="space-y-6 text-sm md:text-base font-light">
              <p className="leading-relaxed">139, Mutongo avenue<br />Mabanga-sud, GOMA, RDC</p>
              <div className="space-y-2">
                <p><span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mr-2">Phone:</span> +243 849 296 155</p>
                <p><span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mr-2">Mail:</span> contactvti@virtssoft.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Nos stores</h4>
            <ul className="space-y-3 text-base font-light">
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>Goma</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>Bukavu</span></Link></li>
              <li><Link to="/store" className="flex items-center hover:text-white transition-colors"><span>Kinshasa</span></Link></li>
              <li><Link to="/store" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"><span>voir plus...</span></Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Nos services</h4>
            <ul className="space-y-3 text-base font-light">
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>Produit IOT</span></Link></li>
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>Énergies</span></Link></li>
              <li><Link to="/services" className="flex items-center hover:text-white transition-colors"><span>IA & Automatisation</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            <div className="flex flex-col items-center md:items-start space-y-5">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Suivez-nous</span>
              <div className="flex items-center space-x-8">
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Facebook size={22} fill="currentColor" /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><XIcon className="w-4.5 h-4.5" /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Instagram size={22} /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Youtube size={24} fill="currentColor" /></a>
                <a href="#" className="text-white hover:opacity-70 transition-opacity"><Linkedin size={22} fill="currentColor" /></a>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-[11px] font-medium cursor-pointer group hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <Globe size={14} className="group-hover:text-blue-400 transition-colors" />
              <span>République Démocratique du Congo <span className="text-gray-500 font-normal ml-1">(Français)</span></span>
              <ChevronDown size={14} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[10px] font-medium text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Conditions</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            <p className="text-[10px] text-center font-light tracking-widest text-gray-600 uppercase">
              &copy; 2025 virtssoft technologies Inc. Tous droits réservés.
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
