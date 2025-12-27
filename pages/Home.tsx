
import React, { useState, useEffect, useCallback } from 'react';
import { SERVICES, BLOG_POSTS, PRODUCTS } from '../constants';
import { ChevronRight, Play, Activity, Zap, Users, ArrowLeft, ArrowRight, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const VeidoLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 19C15.0147 19 13 16.9853 13 14.5C13 12.0147 15.0147 10 17.5 10C18.1068 10 18.6823 10.1215 19.2057 10.3414C19.102 9.07185 18.0536 8.075 16.7647 8.075C16.4801 8.075 16.2081 8.12573 15.9575 8.21832C15.1189 6.8166 13.5939 5.875 11.8382 5.875C9.37367 5.875 7.3308 7.68535 6.94539 10.046C6.6433 9.93282 6.31633 9.87109 5.97414 9.87109C4.33157 9.87109 3 11.2027 3 12.8452C3 13.2985 3.10123 13.7282 3.28255 14.1118C2.49033 14.7352 2 15.6966 2 16.7742C2 18.7303 3.5855 20.3158 5.54167 20.3158H17.5C19.433 20.3158 21 18.7488 21 16.8158C21 14.8828 19.433 13.3158 17.5 13.3158V19Z" fill="#2b759a" />
  </svg>
);

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [currentPhareIndex, setCurrentPhareIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeProducts, setActiveProducts] = useState<Record<string, string>>({
    'objets connectés': 'v1',
    'énergies renouvelables': 'e1'
  });

  const productCategories = ['objets connectés', 'énergies renouvelables'];
  const phareServices = SERVICES.filter(s => s.isPhare);

  const nextSlide = useCallback(() => {
    setCurrentPhareIndex((prev) => (prev + 1) % phareServices.length);
  }, [phareServices.length]);

  const prevSlide = () => {
    setCurrentPhareIndex((prev) => (prev - 1 + phareServices.length) % phareServices.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleProductSelect = (category: string, productId: string) => {
    setActiveProducts(prev => ({ ...prev, [category]: productId }));
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION WITH YOUTUBE BG */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black">
        {/* YouTube Background Container */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-110"
            src="https://www.youtube.com/embed/flIDVvABfms?autoplay=1&mute=1&loop=1&playlist=flIDVvABfms&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
          {/* Gradients to blend the video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        <div className="flex-grow container mx-auto px-6 z-10 flex items-center relative pt-48 md:pt-32">
          <div className="w-full relative min-h-[60vh] md:h-[50vh]">
            {phareServices.map((phare, index) => (
              <div 
                key={phare.id}
                className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                  index === currentPhareIndex ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-12 pointer-events-none scale-95'
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-[340px] md:max-w-none aspect-square md:aspect-video animate-[float_8s_ease-in-out_infinite]">
                    <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-50" />
                    <img src={phare.image} alt={phare.name} className="relative z-10 w-full h-full object-cover rounded-3xl md:rounded-[48px] shadow-2xl border border-white/10" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
                  <div className="space-y-3">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.1] text-white">
                      {phare.name}
                    </h1>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 rounded-full" />
                  </div>
                  <p className="text-base md:text-xl lg:text-2xl text-gray-300/90 font-light max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide">
                    {phare.shortDescription}
                  </p>
                  <div className="pt-6 md:pt-8">
                    <Link to={`/service/${phare.id}`} className="inline-block px-10 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl hover:shadow-blue-500/20">
                      Découvrir l'innovation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Bottom Controls */}
        <div className="container mx-auto px-6 z-10 pb-16 flex flex-col items-center space-y-10">
          <div className="flex items-center space-x-16">
            <button onClick={prevSlide} className="p-3 text-white/20 hover:text-white transition-all transform hover:scale-110" aria-label="Précédent">
              <ArrowLeft size={28} strokeWidth={1} />
            </button>
            <div className="flex space-x-5">
              {phareServices.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPhareIndex(i)} 
                  className={`h-1 transition-all duration-700 rounded-full ${i === currentPhareIndex ? 'w-16 bg-blue-500' : 'w-4 bg-white/20 hover:bg-white/40'}`} 
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="p-3 text-white/20 hover:text-white transition-all transform hover:scale-110" aria-label="Suivant">
              <ArrowRight size={28} strokeWidth={1} />
            </button>
          </div>
          <div className="text-[10px] uppercase tracking-[0.8em] text-gray-500 font-bold opacity-60 animate-pulse">
            Innovons Ensemble, Inspirons l’Avenir
          </div>
        </div>
      </section>

      {/* 🧩 SECTION PRODUITS */}
      <section className="bg-white text-black">
        {productCategories.map((category, catIdx) => {
          const catProds = PRODUCTS.filter(p => p.category === category);
          const activeProdId = activeProducts[category];
          const activeProd = catProds.find(p => p.id === activeProdId) || catProds[0];

          return (
            <div key={category} className={`py-12 md:py-20 ${catIdx % 2 !== 0 ? 'bg-[#f5f5f7]' : 'bg-white'}`}>
              <div className="container mx-auto px-6 flex flex-col items-center">
                <h2 className="text-2xl md:text-4xl font-black text-center mb-6 uppercase tracking-tighter">
                  {category}
                </h2>

                <div className="flex justify-center space-x-6 md:space-x-12 mb-10 md:mb-16">
                  {catProds.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleProductSelect(category, p.id)}
                      className={`text-base md:text-2xl font-bold tracking-tight transition-all pb-1.5 border-b-[4px] md:border-b-[6px] ${
                        activeProdId === p.id ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="space-y-6 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start space-y-2">
                      <div className="flex items-center space-x-3">
                        <VeidoLogo className="w-8 h-8 md:w-12 md:h-12" />
                        <h3 className="text-3xl md:text-6xl font-bold text-[#2b759a] tracking-tighter">
                          {activeProd.name.replace('veido', 'veido-on')}
                        </h3>
                      </div>
                      <p className="text-xl md:text-4xl font-light text-gray-800 tracking-tight">
                        {activeProd.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4">
                      <Link 
                        to={`/product/${activeProd.id}`} 
                        className="text-base md:text-xl font-medium border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
                      >
                        En savoir plus
                      </Link>
                      <button 
                        onClick={() => setSelectedProduct(activeProd)}
                        className="px-8 py-2.5 md:py-3.5 bg-[#1a2b5a] text-white rounded-2xl md:rounded-[1.5rem] text-base md:text-xl font-bold tracking-tight hover:bg-blue-900 transition-colors shadow-lg"
                      >
                        {activeProd.stock > 50 ? 'Achetez' : 'pre-commander'}
                      </button>
                    </div>
                  </div>

                  <div className="relative h-[250px] md:h-[400px] w-full flex justify-center items-center">
                    <div className="absolute transform translate-x-10 translate-y--2 rotate-[15deg] opacity-30 grayscale scale-95 transition-all duration-1000">
                      <img src={activeProd.image} alt="" className="h-[200px] md:h-[320px] object-contain drop-shadow-xl" />
                    </div>
                    <div className="relative transform rotate-[15deg] transition-all duration-700 hover:scale-105">
                      <img 
                        src={activeProd.image} 
                        alt={activeProd.name} 
                        className="h-[240px] md:h-[380px] object-contain drop-shadow-xl" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 md:mt-16 flex justify-center items-center space-x-3 md:space-x-6">
                  {catProds.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => handleProductSelect(category, p.id)}
                      className={`transition-all duration-500 rounded-sm ${
                        activeProdId === p.id ? 'w-8 md:w-12 h-1.5 md:h-2 bg-black' : 'w-4 md:w-8 h-1 md:h-1 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Product ${p.name}`}
                    />
                  ))}
                  <div className="pl-3">
                    <div className="flex space-x-1">
                      <div className="w-0.5 h-3 bg-gray-400" />
                      <div className="w-0.5 h-3 bg-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative w-full max-w-2xl bg-black text-white rounded-[2rem] overflow-hidden flex flex-col items-center animate-fadeIn shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-6 right-6 text-red-600 hover:scale-110 transition-transform z-20"
            >
              <X size={40} strokeWidth={3} />
            </button>

            <div className="w-full pt-10 text-center">
              <h3 className="text-3xl md:text-5xl font-light text-gray-300 tracking-tight">
                {selectedProduct.name.replace('veido', 'veido-on')} vtx
              </h3>
            </div>

            <div className="relative flex items-center justify-center py-10 w-full overflow-hidden">
              <span className="absolute text-[15rem] font-black text-white/5 tracking-tighter select-none pointer-events-none">IOT</span>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="relative z-10 h-64 md:h-96 object-contain transform rotate-[15deg] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="w-full px-8 pb-10 flex flex-col items-center space-y-8">
              <button className="px-16 py-4 bg-[#3a7da1] text-white rounded-full text-2xl font-bold tracking-tight hover:bg-[#2b607d] transition-all shadow-xl active:scale-95">
                Acheter
              </button>
              
              <div className="text-xl md:text-3xl font-light text-gray-400">
                De <span className="text-white font-normal">$ 15/mois</span> ou <span className="text-white font-normal">$ 150</span>
              </div>

              <div className="w-full h-px bg-white/20" />

              <p className="text-center text-sm md:text-lg font-light text-gray-300 leading-relaxed max-w-xl">
                Pour plus d'infos appelé le <span className="font-bold">+234 993 809 052</span> ou visiter un de nos store physique. Trouvez un store le plus proche de chez vous <button className="text-blue-500 underline underline-offset-4">ICI</button> 👈
              </p>
            </div>
          </div>
        </div>
      )}

      {/* QUI SOMMES NOUS */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Virtssoft Team Innovation" className="rounded-3xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light">Qui sommes-nous ?</h2>
            <div className="text-blue-500 font-medium tracking-widest uppercase text-xs">L’innovation au service de la simplicité.</div>
            <p className="text-xl text-gray-400 font-light leading-relaxed">Virtssoft Technologies est à la pointe de la transformation numérique, offrant des solutions qui allient performance and ergonomie pour les défis de demain.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <Zap className="mx-auto mb-2 text-blue-400" size={20} />
                <span className="text-[10px] uppercase tracking-widest text-gray-300">Innovation</span>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <Activity className="mx-auto mb-2 text-green-400" size={20} />
                <span className="text-[10px] uppercase tracking-widest text-gray-300">Inspiration</span>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <Users className="mx-auto mb-2 text-purple-400" size={20} />
                <span className="text-[10px] uppercase tracking-widest text-gray-300">Facilité</span>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center text-blue-400 hover:text-white transition-all group font-medium text-sm">
              En savoir plus <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#0c1c33] py-32 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 space-x-12 scrollbar-hide mb-16 border-b border-white/10">
            {SERVICES.map((s) => (
              <button key={s.id} onClick={() => setActiveService(s)} className={`text-xs uppercase tracking-[0.2em] transition-all whitespace-nowrap pb-4 ${activeService.id === s.id ? 'text-white border-b-2 border-white font-bold' : 'text-gray-500 hover:text-white font-normal'}`}>
                {s.abreviation}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="rounded-[40px] overflow-hidden apple-shadow aspect-square md:aspect-video relative group">
              <img src={activeService.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]" alt={activeService.name} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
            </div>
            <div className="space-y-8 animate-fadeIn">
              <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">{activeService.name}</h3>
              <p className="text-xl text-gray-300 font-light leading-relaxed">{activeService.shortDescription}</p>
              <div className="text-xl font-light text-blue-300 tracking-wider">{activeService.price?.includes('FC') ? activeService.price : `À partir de ${activeService.price || '5000 FC'}`}</div>
              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                <Link to={`/service/${activeService.id}`} className="text-white text-sm uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition-opacity">En savoir plus</Link>
                <Link to="/contact" className="w-full sm:w-auto text-center px-12 py-4 bg-white text-[#0c1c33] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">Nous contacter</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-3 mt-20">
            {SERVICES.map((s) => (
              <button key={s.id} onClick={() => setActiveService(s)} className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeService.id === s.id ? 'bg-white w-8' : 'bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES / EVENTS SECTION */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <div key={post.id} className="relative group rounded-[40px] overflow-hidden aspect-video flex items-center justify-center shadow-2xl">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34440-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
              <div className="relative text-center p-12 space-y-8 z-10">
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl text-white">
                    <span className="uppercase tracking-[0.3em] text-[10px] block mb-4 underline decoration-blue-500 underline-offset-8">EXPLORE</span>
                    <span className="font-bold">{post.category}</span>
                  </h4>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <Link to={`/blog/${post.id}`} className="text-xs uppercase tracking-[0.2em] font-bold border-b border-white/40 hover:border-white transition-all text-white">En savoir plus</Link>
                  {post.videoUrl && (
                    <button className="flex items-center space-x-3 text-xs uppercase tracking-widest bg-white/10 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20 hover:bg-white/30 transition-all group">
                      <Play size={14} className="fill-white group-hover:scale-110 transition-transform" />
                      <span>Voir la vidéo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 text-center mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gray-500 font-bold">Ils nous font confiance</h2>
          <p className="text-gray-400 font-light text-sm italic">Universités, entreprises et organisations partenaires</p>
        </div>
        <div className="flex overflow-hidden group">
          <div className="flex space-x-24 animate-[scroll_40s_linear_infinite] whitespace-nowrap py-10 items-center">
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
              <div key={i} className="text-3xl md:text-4xl font-black text-gray-600 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:text-white transition-all duration-500 cursor-pointer">PARTNER_{i}</div>
            ))}
          </div>
          <div className="flex space-x-24 animate-[scroll_40s_linear_infinite] whitespace-nowrap py-10 items-center" aria-hidden="true">
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
              <div key={i} className="text-3xl md:text-4xl font-black text-gray-600 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:text-white transition-all duration-500 cursor-pointer">PARTNER_{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 py-24 pb-40">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-20">Ce qu’ils disent de nous</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: 'Jean Dupont', role: 'Directeur, UNITECH', img: '11' },
            { name: 'Alice Mutoni', role: 'CEO, BizCenter', img: '12' },
            { name: 'Marc Lelo', role: 'Etudiant, ULPGL', img: '13' },
          ].map((testimonial, i) => (
            <div key={i} className="p-10 bg-white/[0.03] rounded-[50px] space-y-8 hover:bg-white/[0.06] transition-all duration-500 border border-white/5 group">
              <img src={`https://i.pravatar.cc/150?img=${testimonial.img}`} className="w-20 h-20 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all duration-700 ring-4 ring-blue-500/20" alt={testimonial.name} />
              <p className="text-gray-400 font-light leading-relaxed italic text-center text-lg">"Virtssoft a transformé notre manière de gérer nos processus académiques. Une équipe à l'écoute et proactive."</p>
              <div className="text-center space-y-1">
                <div className="font-bold text-white text-lg">{testimonial.name}</div>
                <div className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
