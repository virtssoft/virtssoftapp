
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Play, Pause, Sparkles, Cpu, Zap, Share2 } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id) || SERVICES[0];
  const [activeSlide, setActiveSlide] = useState(0);

  // Mock slides based on the screenshots
  const detailSlides = [
    {
      title: "puissance de calcul, traitement rapide...",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "analyse prédictive et modèles IA...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "sécurité de bout en bout...",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-light">
      {/* Hero Section - High Tech / AI Theme */}
      <section className="relative pt-32 pb-24 flex flex-col items-center overflow-hidden">
        {/* Background Gradients/Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-light text-gray-400">Explorez</h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              toutes les possibilités s'offre :
            </h1>
          </div>

          {/* Logo Brand Name - nuruia style */}
          <div className="flex flex-col items-center space-y-4">
             <div className="flex items-center space-x-1">
                <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">nuru</span>
                <div className="relative">
                   <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">ia</span>
                   <Sparkles className="absolute -top-4 -right-8 text-blue-400 w-8 h-8 md:w-12 md:h-12 animate-pulse" />
                </div>
             </div>
             
             {/* Circular UI Element from screenshot */}
             <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="grid grid-cols-2 gap-2 p-4">
                   <div className="w-4 h-4 rounded-full bg-blue-500" />
                   <div className="w-4 h-4 rounded-full bg-purple-500" />
                   <div className="w-4 h-4 rounded-full bg-green-500" />
                   <div className="w-4 h-4 rounded-full bg-yellow-500" />
                </div>
                <div className="absolute -bottom-2 px-3 py-1 bg-black/80 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-bold">IA</div>
             </div>
          </div>

          <button className="flex items-center space-x-3 px-8 py-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all group mt-8">
             <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
             </div>
             <span className="text-sm font-medium tracking-tight">Essayer l'assistant nia</span>
          </button>
        </div>
      </section>

      {/* Plus des détails Carousel */}
      <section className="bg-[#1c1c1c] py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Plus des détails.</h2>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-base md:text-xl">
              <span>voir la video</span>
              <div className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center">
                 <Play size={12} fill="currentColor" className="ml-0.5" />
              </div>
            </button>
          </div>

          <div className="flex space-x-6 overflow-x-auto pb-12 scrollbar-hide snap-x">
            {detailSlides.map((slide, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[85vw] md:w-[500px] bg-black rounded-[3rem] p-12 md:p-14 flex flex-col justify-start snap-center relative overflow-hidden group border border-white/5 shadow-2xl"
              >
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-white mb-10 max-w-[280px]">
                   {slide.title}
                </h3>
                
                <div className="mt-auto flex justify-center">
                  <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-inner border border-white/10">
                    <img src={slide.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-6">
            <div className="bg-black/80 backdrop-blur-xl rounded-full px-6 py-2.5 flex items-center space-x-4 border border-white/10">
               {[0, 1, 2, 3].map((i) => (
                 <button 
                  key={i} 
                  className={`h-2.5 rounded-full transition-all duration-700 ${activeSlide === i ? 'w-10 bg-white' : 'w-2.5 bg-gray-600'}`}
                  onClick={() => setActiveSlide(i)}
                 />
               ))}
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-black/80 backdrop-blur-xl rounded-full border border-white/10">
              <Pause size={18} fill="white" strokeWidth={0} />
            </button>
          </div>
        </div>
      </section>

      {/* Use the Assistant Section (White Background) */}
      <section className="bg-white text-black py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
            Utilisez<br />
            l'assistant Nia.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 font-medium text-lg">
            Explore a curated collection of real A/B test results from popular websites to help you make data-driven design decisions.
          </p>
          
          <div className="max-w-6xl mx-auto shadow-2xl rounded-[2rem] overflow-hidden border border-gray-200">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover" 
               alt="Interface preview" 
             />
          </div>

          {/* Pagination dots for interface screenshots */}
          <div className="flex justify-center space-x-2 mt-10">
             {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-black w-6' : 'bg-gray-200'}`} />
             ))}
          </div>
        </div>
      </section>

      {/* Applications / Partners Section */}
      <section className="bg-[#f2f2f2] py-20">
         <div className="container mx-auto px-6">
            <h4 className="text-center text-xl md:text-2xl font-bold tracking-tight mb-12 text-black">
               applications qui utilisent<br />
               Nuruia
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60">
               {['BluePoint', 'KODFUN', 'aramco', 'deepseek'].map(brand => (
                  <div key={brand} className="text-black text-2xl md:text-3xl font-black lowercase tracking-tighter">
                     {brand}
                  </div>
               ))}
            </div>
            
            {/* Small floating UI badges at the bottom */}
            <div className="flex justify-center space-x-6 mt-16">
               <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center"><Cpu size={24} className="text-blue-500" /></div>
               <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center"><Zap size={24} className="text-purple-500" /></div>
               <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center"><Share2 size={24} className="text-green-500" /></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
