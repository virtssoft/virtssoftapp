
import React from 'react';
import { PRODUCTS } from '../constants';
import { Search, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Store: React.FC = () => {
  const categories = ['Tous', 'Smartphones', 'IoT Devices', 'Accessoires', 'Power Solutions'];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative py-32 bg-[#050505]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-8">Découvrez nos produits</h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">Solutions matérielles et accessoires certifiés Virtssoft Technologies.</p>
          <div className="relative max-w-xl mx-auto">
             <input type="text" placeholder="Rechercher un produit..." className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-12 focus:outline-none focus:border-blue-500" />
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>
        </div>
      </section>

      {/* CATEGORIES NAV */}
      <div className="sticky top-[64px] z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 flex space-x-12 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((c, i) => (
            <button key={c} className={`text-xs uppercase tracking-widest font-bold whitespace-nowrap ${i === 0 ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'} transition-all pb-2`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* CATALOG */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden mb-8 p-12 flex items-center justify-center relative">
                <img src={p.image} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700" />
                {p.isFeatured && <div className="absolute top-6 right-6 bg-blue-500 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">Vedette</div>}
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500 font-light">{p.category}</p>
                  </div>
                  <div className="text-2xl font-light text-blue-400">{p.price}</div>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{p.description}</p>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="flex-grow bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition-colors">
                    Acheter
                  </button>
                  <Link to={`/product/${p.id}`} className="p-3 border border-gray-800 rounded-full hover:border-white transition-colors">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Store;
