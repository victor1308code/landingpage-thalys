import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Artigos from './components/Artigos';
import ArtigoDetalhe from './components/ArtigoDetalhe';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  const [selectedArticleSlug, setSelectedArticleSlug] = useState(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#artigo/')) {
      return hash.replace('#artigo/', '');
    }
    return null;
  });

  // Ouvir alterações de Hash no navegador (Suporte a botão voltar/avançar do navegador)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#artigo/')) {
        const slug = hash.replace('#artigo/', '');
        setSelectedArticleSlug(slug);
      } else {
        setSelectedArticleSlug(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectArtigo = (slug) => {
    setSelectedArticleSlug(slug);
    window.location.hash = `artigo/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToArtigos = () => {
    setSelectedArticleSlug(null);
    window.location.hash = 'artigos';
    setTimeout(() => {
      const el = document.getElementById('artigos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      <Navbar />
      <main>
        {selectedArticleSlug ? (
          <ArtigoDetalhe 
            slug={selectedArticleSlug} 
            onBack={handleBackToArtigos}
            onSelectArtigo={handleSelectArtigo}
          />
        ) : (
          <>
            <Hero />
            <Sobre />
            <Servicos />
            <Depoimentos />
            <Artigos onSelectArtigo={handleSelectArtigo} />
            <Contato />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
