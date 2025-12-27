
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Play, Pause } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [activeSlide, setActiveSlide] = useState(0);

  const detailSlides = [
    {
      title: product.name.replace('veido', 'Veido-On'),
      description: "vous permet de garder le contrôle sur votre consomation.",
      image: "https://images.unsplash.com/photo-1558002038-1037906d858b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Optimisation VTX",
      description: "Suivez en temps réel chaque watt utilisé.",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen font-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-200 tracking-tight mb-16">
          {product.name.replace('veido', 'veido-On')} vtx
        </h1>

        <div className="relative w-full flex justify-center items-center py-12 md:py-24 overflow-hidden">
          {/* Background IOT Text */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
            <span className="text-[12rem] md:text-[20rem] lg:text-[25rem] font-black text-white/[0.04] tracking-tighter leading-none">
              IOT
            </span>
          </div>
          
          {/* Main Product Image */}
          <div className="relative z-10 transform rotate-[15deg] px-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-[300px] md:h-[450px] lg:h-[550px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]" 
            />
          </div>
        </div>

        {/* Action Button & Price */}
        <div className="flex flex-col items-center space-y-6 mt-6">
          <button className="px-10 py-2 bg-[#3a7da1] text-white rounded-full text-xl md:text-2xl font-bold tracking-tight hover:bg-[#2b607d] transition-all shadow-xl active:scale-95 border border-white/10">
            Acheter
          </button>
          <div className="text-lg md:text-xl font-light text-gray-400">
            De <span className="text-white font-normal">$ 15/mois</span> ou <span className="text-white font-normal">$ 150</span>
          </div>
        </div>
      </section>

      {/* Details Carousel Section */}
      <section className="bg-[#2a2a2a] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Plus des détails.</h2>
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
                className="flex-shrink-0 w-[85vw] md:w-[600px] bg-black rounded-[3rem] p-12 md:p-16 flex flex-col justify-start snap-center relative overflow-hidden group border border-white/5 shadow-2xl"
              >
                <div className="relative z-10 space-y-4 max-w-[280px]">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-white">{slide.title}</h3>
                  <p className="text-lg md:text-2xl font-light text-gray-300 leading-snug">{slide.description}</p>
                </div>
                
                <div className="mt-12 md:mt-16 flex justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-inner border border-white/10">
                    <img src={slide.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
            {/* Empty space for scroll feel */}
            <div className="flex-shrink-0 w-12" />
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center space-x-6">
            <div className="bg-black/40 backdrop-blur-xl rounded-full px-6 py-2.5 flex items-center space-x-4 border border-white/10">
               {[0, 1, 2].map((i) => (
                 <button 
                  key={i} 
                  className={`h-2.5 rounded-full transition-all duration-700 ${activeSlide === i ? 'w-10 bg-white' : 'w-2.5 bg-gray-500 hover:bg-gray-400'}`}
                  onClick={() => setActiveSlide(i)}
                 />
               ))}
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Pause size={18} fill="white" strokeWidth={0} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="bg-[#333333] py-24 md:py-40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-24 leading-[1.05] text-white">
            Veido.<br />
            Contrôler votre<br />
            consomation.
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
            <div className="w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5">
              <img src="https://images.unsplash.com/photo-1558002038-1037906d858b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Full view" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5">
                <img src="https://images.unsplash.com/photo-1550524513-9636ee8b6180?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Interface" />
              </div>
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5">
                <img src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Back details" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
