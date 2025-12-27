
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Skeleton from './components/Skeleton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Store from './pages/Store';
import Account from './pages/Account';
import ProductDetail from './pages/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Skeleton type="hero" />;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<div className="pt-40 text-center text-4xl font-extralight text-white">Page Blog en construction</div>} />
          <Route path="/services" element={<div className="pt-40 text-center text-4xl font-extralight text-white">Nos Services</div>} />
          <Route path="/support" element={<Support />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/account" element={<Account />} />
          {/* Fallback 404 */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 px-6">
              <h1 className="text-9xl font-black text-white/10">404</h1>
              <p className="text-2xl font-light text-gray-400 italic">Il semble que vous soyez perdu dans le cloud...</p>
              <a href="/" className="px-10 py-4 bg-white text-black rounded-full font-bold">Retour à l'accueil</a>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
