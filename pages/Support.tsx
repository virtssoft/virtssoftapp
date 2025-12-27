
import React from 'react';
import { Search, LifeBuoy, CreditCard, Box, Shield, HelpCircle, Mail, MessageSquare, Phone } from 'lucide-react';

const Support: React.FC = () => {
  const categories = [
    { icon: <HelpCircle />, name: 'Compte', desc: 'Gérer votre OneAccount' },
    { icon: <CreditCard />, name: 'Facturation', desc: 'Aide sur vos paiements' },
    { icon: <Box />, name: 'Produits', desc: 'Support Store & Matériel' },
    { icon: <Shield />, name: 'Sécurité', desc: 'Protection de vos données' },
  ];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/support/1920/1080')] bg-cover bg-center">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-8">
           <h1 className="text-4xl md:text-6xl font-extralight">Besoin d’aide ?</h1>
           <p className="text-xl text-gray-400 font-light">Trouvez rapidement une réponse ou contactez notre support.</p>
           <div className="relative max-w-2xl mx-auto">
             <input 
               type="text" 
               placeholder="Rechercher un article, un sujet..." 
               className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-12 focus:outline-none focus:border-blue-500 transition-colors"
             />
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
           </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="p-8 bg-white/5 rounded-3xl text-center group hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{cat.desc}</p>
              <button className="text-xs uppercase tracking-widest font-bold text-blue-400 hover:text-white">Explorer</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/5 py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-light text-center mb-16 italic">Questions Fréquentes</h2>
          <div className="space-y-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="bg-black border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-colors cursor-pointer group">
                 <div className="flex justify-between items-center">
                   <h4 className="font-medium">Comment activer mon compte OneAccount ?</h4>
                   <HelpCircle size={18} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CONTACT DIRECT */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4 p-10 rounded-[40px] border border-white/5">
             <Mail className="mx-auto text-blue-400" size={32} />
             <h4 className="text-xl font-bold">Email Support</h4>
             <p className="text-gray-500 text-sm">support@virtssoft.com</p>
             <button className="px-6 py-2 bg-blue-500 rounded-full text-xs font-bold">Envoyer</button>
          </div>
          <div className="text-center space-y-4 p-10 rounded-[40px] bg-blue-500 text-white">
             <MessageSquare className="mx-auto" size={32} />
             <h4 className="text-xl font-bold">Chat Live</h4>
             <p className="text-blue-100 text-sm">Disponible de 8h – 18h</p>
             <button className="px-6 py-2 bg-white text-blue-500 rounded-full text-xs font-bold">Démarrer</button>
          </div>
          <div className="text-center space-y-4 p-10 rounded-[40px] border border-white/5">
             <Phone className="mx-auto text-green-400" size={32} />
             <h4 className="text-xl font-bold">Téléphone</h4>
             <p className="text-gray-500 text-sm">(+243) 993 809 052</p>
             <button className="px-6 py-2 border border-gray-600 rounded-full text-xs font-bold">Appeler</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
