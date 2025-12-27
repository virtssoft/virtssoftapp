
import React, { useState } from 'react';
import { User, Shield, Briefcase, ShoppingBag, MessageSquare, LogOut, ChevronRight, Edit2 } from 'lucide-react';

const Account: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="w-full max-w-md space-y-12">
          <div className="text-center space-y-4">
             <div className="text-3xl font-light tracking-[0.3em]">ONE<span className="font-bold">ACCOUNT</span></div>
             <p className="text-gray-500 font-light">Un seul compte pour accéder à tous les services Virtssoft.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Email ou numéro de téléphone" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500"
              />
              <input 
                type="password" 
                placeholder="Mot de passe" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-500 transition-colors"
            >
              Se connecter
            </button>
            <div className="flex justify-between text-xs text-gray-500 font-medium">
              <button className="hover:text-white">Mot de passe oublié ?</button>
              <button className="hover:text-white">Créer un compte</button>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
             <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-[#0a0a0a] px-4 text-gray-600">ou</span></div>
          </div>

          <button className="w-full py-4 border border-blue-500/50 text-blue-400 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-blue-500/10 transition-colors">
            <span>Se connecter avec OneAccount</span> 🔐
          </button>
        </div>
      </div>
    );
  }

  const menu = [
    { id: 'profile', name: 'Informations personnelles', icon: <User size={20} /> },
    { id: 'security', name: 'Sécurité du compte', icon: <Shield size={20} /> },
    { id: 'services', name: 'Mes services Virtssoft', icon: <Briefcase size={20} /> },
    { id: 'orders', name: 'Mes commandes', icon: <ShoppingBag size={20} /> },
    { id: 'support', name: 'Mes tickets support', icon: <MessageSquare size={20} /> },
    { id: 'logout', name: 'Déconnexion', icon: <LogOut size={20} /> },
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        {/* SIDEBAR */}
        <aside className="md:w-1/4 space-y-4">
          <div className="p-8 bg-white/5 rounded-[40px] text-center mb-8">
             <img src="https://i.pravatar.cc/150?img=1" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500/50 p-1" />
             <h2 className="text-xl font-bold">Derrick Virts</h2>
             <p className="text-xs text-blue-400 uppercase tracking-widest">ID: V-8829-X</p>
          </div>
          <nav className="space-y-2">
            {menu.map(item => (
              <button
                key={item.id}
                onClick={() => item.id === 'logout' ? setIsLoggedIn(false) : setActiveTab(item.id)}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all ${
                  activeTab === item.id ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="flex-grow bg-white/5 rounded-[40px] p-10 md:p-16">
          {activeTab === 'profile' && (
            <div className="space-y-12">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-light">Informations Personnelles</h3>
                <button className="flex items-center space-x-2 text-xs uppercase tracking-widest text-blue-400 hover:text-white"><Edit2 size={14} /> <span>Modifier</span></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Nom Complet</label>
                  <div className="text-lg">Derrick Virts</div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                  <div className="text-lg">derrick.virts@example.com</div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Téléphone</label>
                  <div className="text-lg">+243 993 809 052</div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Adresse</label>
                  <div className="text-lg">Goma, Nord-Kivu, RDC</div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'services' && (
            <div className="space-y-12">
              <h3 className="text-3xl font-light">Mes Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['EM Academia', 'EM Business', 'Workaa'].map(s => (
                  <div key={s} className="p-8 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-between">
                     <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center font-bold">V</div>
                       <div>
                         <div className="font-bold">{s}</div>
                         <div className="text-xs text-green-400">Actif</div>
                       </div>
                     </div>
                     <button className="p-2 hover:bg-white/10 rounded-full"><ChevronRight /></button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Account;
