
import React from 'react';
import { Play, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* HERO WITH VIDEO BG */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/about-hero/1920/1080" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center space-y-8 px-6">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight">À propos de Virtssoft Technologies</h1>
          <p className="text-xl md:text-2xl font-light text-gray-300">Innovons ensemble, inspirons l’avenir</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
              Découvrir notre histoire
            </button>
            <button className="px-10 py-4 border border-white/30 rounded-full font-medium hover:border-white transition-colors">
              Voir nos programmes
            </button>
          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE - TIMELINE */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-16 text-center">Notre Histoire</h2>
          <div className="relative flex items-center space-x-12 overflow-x-auto pb-10 scrollbar-hide">
             {[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year, i) => (
               <div key={year} className="min-w-[300px] group cursor-pointer">
                 <div className="text-6xl font-black text-white/10 group-hover:text-blue-500/30 transition-colors mb-6">{year}</div>
                 <h3 className="text-xl font-bold mb-4">Événement Majeur {i+1}</h3>
                 <p className="text-gray-400 font-light leading-relaxed">
                   Lancement de la plateforme EM Academia révolutionnant la gestion des universités en RDC.
                 </p>
                 <div className="mt-8 h-1 w-full bg-white/10 group-hover:bg-blue-500 transition-colors" />
               </div>
             ))}
          </div>
          <div className="flex justify-center items-center space-x-8 mt-12">
            <button className="p-3 border border-gray-800 rounded-full hover:border-white transition-colors"><ChevronLeft /></button>
            <span className="text-sm font-light">1 / 8</span>
            <button className="p-3 border border-gray-800 rounded-full hover:border-white transition-colors"><ChevronRight /></button>
          </div>
        </div>
      </section>

      {/* COMITÉ EXÉCUTIF */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-20">Comité Exécutif</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Derrick Virts', role: 'Founder & CEO', img: 'https://i.pravatar.cc/600?img=1' },
              { name: 'Sarah Musoni', role: 'COO', img: 'https://i.pravatar.cc/600?img=2' },
              { name: 'Marc Kabamba', role: 'CTO', img: 'https://i.pravatar.cc/600?img=3' },
            ].map((member, i) => (
              <div key={member.name} className="relative group overflow-hidden rounded-[40px]">
                <img src={member.img} className="w-full h-[500px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="text-2xl font-bold mb-1">{member.name}</div>
                   <div className="text-blue-400 uppercase tracking-widest text-xs mb-6">{member.role}</div>
                   <div className="flex space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <a href="#"><Linkedin size={18} /></a>
                     <a href="#"><Twitter size={18} /></a>
                     <a href="#"><Instagram size={18} /></a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSEIL D'ADMINISTRATION */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-20">Conseil d'Administration</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="text-center space-y-4">
                <img src={`https://i.pravatar.cc/300?img=${i+20}`} className="w-32 h-32 rounded-full mx-auto grayscale" />
                <div>
                   <div className="font-bold">Administrateur {i}</div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest">Board Member</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
